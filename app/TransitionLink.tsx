"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { usePageTransition } from "./PageTransitionProvider";

type TransitionLinkProps = ComponentProps<typeof Link>;

export default function TransitionLink({ href, onClick, target, prefetch = false, ...props }: TransitionLinkProps) {
  const { navigate } = usePageTransition();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === "_blank" ||
      typeof href !== "string" ||
      !href.startsWith("/")
    ) return;

    event.preventDefault();
    navigate(href);
  }

  return <Link {...props} href={href} target={target} prefetch={prefetch} onClick={handleClick} />;
}
