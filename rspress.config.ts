import * as path from "node:path";
import { defineConfig } from "rspress/config";

const BASE_PATH = process.env.BASE_PATH ? process.env.BASE_PATH : "/";

export default defineConfig({
  root: path.join(__dirname, "document/docs"),
  base: BASE_PATH,
  title: "Synology Api",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
    ],
  },
});
