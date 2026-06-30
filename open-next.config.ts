import { defineConfig } from "@opennextjs/cloudflare";

export default defineConfig({
  next: {
    dir: ".",
  },
  workers: {
    nodejsCompat: true,
  },
  cache: {
    revalidate: 60,
  },
});
