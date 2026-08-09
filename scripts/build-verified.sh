#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec bash "${script_dir}/sites-env.sh" -- bash "$0" "$@"
fi

command -v timeout >/dev/null || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Running bounded vinext build..."
output_dir="${SITES_PROJECT_ROOT}/dist"
case "${output_dir}" in
  */dist) rm -rf -- "${output_dir}" ;;
  *) echo "Refusing to clean unexpected build output: ${output_dir}" >&2; exit 69 ;;
esac
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

# Vinext currently copies its default font cache even when next/font is unused.
# Remove it only when no generated asset references the directory.
font_cache="${output_dir}/client/assets/_vinext_fonts"
if [[ -d "${font_cache}" ]] && ! grep -Rqs "_vinext_fonts/" "${output_dir}" --exclude='*.woff2'; then
  case "${font_cache}" in
    */dist/client/assets/_vinext_fonts) rm -rf -- "${font_cache}" ;;
    *) echo "Refusing to clean unexpected font cache: ${font_cache}" >&2; exit 69 ;;
  esac
fi

bash "${script_dir}/validate-artifact.sh"
