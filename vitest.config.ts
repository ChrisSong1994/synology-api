import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  return {
    test: {
      // mode defines what ".env.{mode}" file to choose if exists
      env: loadEnv(mode, process.cwd(), ""),
      testTimeout:  20000,  //  20s for pingpang
      include: ["./test/Core.User.test.ts"],
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
