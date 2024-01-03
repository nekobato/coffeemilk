import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NVCC",
  description: "Nekobato (Vue) Component Collections for Web",
  srcDir: "src",
  sitemap: {
    hostname: "https://nekobato.github.io/nvcc/",
  },

  themeConfig: {
    sidebar: [
      {
        text: "Components",
        items: [
          {
            text: "Alternative Button List",
            link: "/collections/alternative-button-list",
          },
          {
            text: "Game UI",
            items: [
              {
                text: "Basic Buttons",
                link: "/collections/game-ui/basic-buttons",
              },
              {
                text: "Colorful List",
                link: "/collections/game-ui/colorful-list",
              },
            ],
          },
          { text: "Snap", link: "/collections/snap" },
          { text: "Stamp Password", link: "/collections/stamp-password" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/nekobato/nvcc" }],
  },
});
