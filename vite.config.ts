// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Cloudflare is disabled — the site is deployed as a prerendered static build on Vercel.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
