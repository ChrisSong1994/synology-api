import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    outDir: "lib/cjs",
    format: ["cjs"],
    clean: true,
  },);
