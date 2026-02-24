import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";

const TEST_INCLUDES = [
  // "./test/Auth.test.ts",
  // "./test/FileStation/Search.test.ts",
    // "./test/FileStation/Common.test.ts",
  "./test/VideoStation.test.ts",
//   "./test/AudioStation/common.test.ts",
  // "./test/Command.test.ts",
  // "./test/Core.User.test.ts",
  // "./test/Docker.test.ts",
];

export default defineConfig(({ mode }) => {
  return {
    test: {
      // mode defines what ".env.{mode}" file to choose if exists
      env: loadEnv(mode, process.cwd(), ""),
      testTimeout: 20000, //  20s for pingpang
      include: TEST_INCLUDES,
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
