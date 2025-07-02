import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],

    outDir: "dist/cjs",
    format: ["cjs"],
    clean: true,
  },);
