import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NVCC",
  description: "Nekobato (Vue) Component Collection for Web",
  lang: "ja-JP",
  srcDir: "src",
  sitemap: {
    hostname: "https://nekobato.github.io/nvcc/",
  },
  base: "/nvcc/",
  themeConfig: {
    sidebar: [
      {
        text: "Home",
        link: "/",
      },
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
            ],
          },
          { text: "Stamp Password", link: "/collections/stamp-password" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/nekobato/nvcc" }],
  },
});
