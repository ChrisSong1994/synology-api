import * as path from "node:path";
import { defineConfig } from "rspress/config";

const BASE_PATH = process.env.BASE_PATH ? process.env.BASE_PATH : "/";

export default defineConfig({
  root: path.join(__dirname, "document/docs"),
  base: BASE_PATH,
  title: "Javascript Synology Api Docs",
  icon:"/icon.png",
  logo: "/logo.png",
  logoText: "Javascript Synology Api",
   globalStyles: path.join(__dirname, 'document/styles/index.css'),
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
