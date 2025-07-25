import * as path from "node:path";
import { defineConfig } from "rspress/config";

const BASE_PATH = process.env.BASE_PATH ? process.env.BASE_PATH : "/";

export default defineConfig({
  root: path.join(__dirname, "document/docs"),
  base: BASE_PATH,
  title: "Javascript Synology Api Docs",
  icon: "/icon.png",
  logo: "/logo.png",
  logoText: "Javascript Synology Api",
  globalStyles: path.join(__dirname, "document/styles/index.css"),
  lang: "en",
  locales: [
    {
      lang: "en",
      label: "English",
      title: "Rspress",
      description: "Static Site Generator",
    },
    {
      lang: "zh",
      label: "简体中文",
      title: "Rspress",
      description: "静态网站生成器",
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/ChrisSong1994/synology-api",
      },
    ],
  },
});
