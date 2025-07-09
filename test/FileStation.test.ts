import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./util";

describe("SynologyApi FileStation", async () => {
  const synologyApi = createSynologyApi();
  await synologyApi.connect();

  if (synologyApi.isConnecting) {
    test("FileStation   getInfo", async () => {
      const result = await synologyApi.FileStation.getInfo();

      expect(result.success).toBeDefined();
    });

    test("FileStation   getFileList params error", async () => {
      await expect(synologyApi.FileStation.getFileList()).rejects.toThrowError(
        new Error("folder_path is required")
      );
    });

    test("FileStation   getFileList result success", async () => {
      const result = await synologyApi.FileStation.getFileList({
        folder_path: "/book",
      });
      expect(result).toMatchObject({
        success: true,
        data: {},
      });
      expect(result.data.files.length).toBeGreaterThanOrEqual(0);
    });

    test("FileStation   getFileList result error", async () => {
      const result = await synologyApi.FileStation.getFileList({
        folder_path: "/",
      });
      expect(result).toMatchObject({
        success: false,
        error: {},
      });
    });

    test("FileStation   getFileList result", async () => {
      const result = await synologyApi.FileStation.getFileListShare();
      expect(result).toMatchObject({
        success: true,
        data: {
          offset: 0,
        },
      });
      expect(result.data.shares.length).toBeGreaterThanOrEqual(0);
    });
  }
});
