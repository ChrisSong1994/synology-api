import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  return {
    test: {
      // mode defines what ".env.{mode}" file to choose if exists
      env: loadEnv(mode, process.cwd(), ""),
      testTimeout:  10000,
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
