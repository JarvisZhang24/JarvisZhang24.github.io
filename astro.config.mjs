import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jarvis-zhang.com",
  output: "static",
  trailingSlash: "always",
  markdown: {
    // Dual themes emit --shiki-dark custom properties on each token; global.css
    // switches to them under [data-theme="dark"].
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark-dimmed",
      },
      wrap: false,
    },
  },
});
