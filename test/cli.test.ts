import path from "path";
import { describe, test, expect } from "vitest";
import { execa } from "execa";

const syno = path.resolve(__dirname, "../lib/cli/index.js");

describe("syno cli", () => {
  test("SynologyApi FileStation", async () => {
    const { stdout } = await execa`${syno} fs getInfo`;
    const result = JSON.parse(stdout);
    expect(result).toMatchObject({
      success: true,
      data: {},
    });
  });

  test("SynologyApi AudioStation", async () => {
    const { stdout } = await execa`${syno} as getSongList --params {"limit":10}`;
    const result = JSON.parse(stdout);
    expect(result.data.songs.length).toBeLessThanOrEqual(10);
  });
});
