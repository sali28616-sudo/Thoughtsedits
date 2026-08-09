/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const portfolioVideoIds = new Set([
  "1rWQrPCYfH4nUAzBgqAJ7cX4bJTNM0Xgb",
  "1HtAUNnkHoUWmJmstpgmMPpl5PbhlvWYp",
  "1xcX7hB16txJibAdVlu0hwT8foxisxgJJ",
  "16aluH0shttIm7gEvrqPZhECUOM6NRFd2",
  "1HL0RERWvffPBGqw9dJlxgGHsEE2ztHmB",
  "15Ot1b5FDD9e326f-_MlTo10DdQgDf6fO",
]);

async function streamPortfolioVideo(request: Request, videoId: string) {
  if (!portfolioVideoIds.has(videoId) || (request.method !== "GET" && request.method !== "HEAD")) {
    return new Response("Video not found", { status: 404 });
  }

  const source = new URL("https://drive.usercontent.google.com/download");
  source.searchParams.set("id", videoId);
  source.searchParams.set("export", "download");
  source.searchParams.set("confirm", "t");

  const upstreamHeaders = new Headers();
  const range = request.headers.get("range");
  if (range) upstreamHeaders.set("range", range);

  const upstream = await fetch(source, {
    method: request.method,
    headers: upstreamHeaders,
    redirect: "follow",
  });

  if (!upstream.ok && upstream.status !== 206) {
    return new Response("Video is temporarily unavailable", { status: 502 });
  }

  const headers = new Headers({
    "Accept-Ranges": upstream.headers.get("accept-ranges") || "bytes",
    "Cache-Control": "public, max-age=3600, s-maxage=86400",
    "Content-Type": upstream.headers.get("content-type") || "video/mp4",
    "Cross-Origin-Resource-Policy": "same-origin",
  });

  for (const name of ["content-length", "content-range", "etag", "last-modified"]) {
    const value = upstream.headers.get(name);
    if (value) headers.set(name, value);
  }

  return new Response(request.method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/media/")) {
      const videoId = url.pathname.slice("/media/".length).replace(/\.mp4$/, "");
      return streamPortfolioVideo(request, videoId);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
