import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./helper";
// import fs from "fs"

describe("SynologyApi FileStation", async () => {
  const synologyApi = createSynologyApi();

  test.skip("getInfo", async () => {
    const result = await synologyApi.fs.getInfo();
    expect(result.success).toBeDefined();
  });

  test.skip("getFileList params error", async () => {
    await expect(synologyApi.FileStation.getFileList()).rejects.toThrowError(
      new Error("folder_path is required")
    );
  });

  test.skip("getFileList result success", async () => {
    const result = await synologyApi.FileStation.getFileList({
      folder_path: "/book",
    });
    expect(result).toMatchObject({
      success: true,
      data: {},
    });
    expect(result.data.files.length).toBeGreaterThanOrEqual(0);
  });

  test.skip("getFileList result error", async () => {
    const result = await synologyApi.FileStation.getFileList({
      folder_path: "/",
    });
    expect(result).toMatchObject({
      success: false,
      error: {},
    });
  });

  test.skip("getFileList result", async () => {
    const result = await synologyApi.FileStation.getFileListShare();
    expect(result).toMatchObject({
      success: true,
      data: {
        offset: 0,
      },
    });
    expect(result.data.shares.length).toBeGreaterThanOrEqual(0);
  });

  test.skip("getDownloadFile", async () => {
    const result = await synologyApi.FileStation.getDownloadFile({
      path: "xxxxxx",
    });
    expect(result.data).toBeUndefined();
  });

  test("uploadFile", async () => {
    // const testFile = createTestFile();
    const result = await synologyApi.fs.uploadFile({
      path: "/book",
      file: "/Users/songjun/Workspace/github/node-synology-api/test/Docker.test.ts",
    });
    console.log(result);
    // expect(result.data).toBeUndefined();
  });
});
