import { describe, expect, test } from "vitest";

import { createSynologyApi } from "../helper";
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
    const result = await synologyApi.FileStation.getShareFileList();
    expect(result).toMatchObject({
      success: true,
      data: {
        offset: 0,
      },
    });
    expect(result.data.shares.length).toBeGreaterThanOrEqual(0);
  });

  test("getDownloadFile", async () => {
    const result = await synologyApi.FileStation.getDownloadFile({
      path: "/下载/《Linux是怎样工作的》〔武内觉 著〕文字版[非扫描].pdf",
    });
    console.log("getDownloadFile result", result);
    expect(result.data).toMatch(/^https?:\/\//);
  });

  test.skip("getVirtualFolderList", async () => {
    const result = await synologyApi.FileStation.getVirtualFolderList();
    expect(result.data.folders.length).toBeGreaterThanOrEqual(0);
  });

  test.skip("clearBrokenFavorite", async () => {
    const result = await synologyApi.FileStation.clearBrokenFavorite();
    expect(result.success).toBeTruthy();
  });

  test.skip("getThumb", async () => {
    const result = await synologyApi.FileStation.getThumbUrl({
      path: "/book/logo.png",
    });
    expect(result.data).toBeDefined();
  });

  test.skip("DirSize", async () => {
    const result = await synologyApi.FileStation.startDirSizeCalc({
      path: "/book",
    });
    expect(result.data.taskid).toBeDefined();

    const statusResult = await synologyApi.FileStation.getDirSizeCalcStatus({
      taskid: result.data.taskid,
    });
    if (!statusResult.data.finished) {
      expect(statusResult.data.total_size).toBeGreaterThan(0);
    }
  });

  test.skip("MD5", async () => {
    const result = await synologyApi.FileStation.startMD5Calc({
      file_path: "/book/logo1.png",
    });
    expect(result.data.taskid).toBeDefined();

    const statusResult = await synologyApi.FileStation.getMD5CalcStatus({
      taskid: result.data.taskid,
    });
    if (!statusResult?.data?.finished) {
      expect(statusResult.data?.md5).toBeDefined();
    }
  });

  test.skip("getBackgroundTaskList", async () => {
    const result = await synologyApi.FileStation.getBackgroundTaskList();
    expect(result.data).toBeDefined();
  });

  test.skip("clearFinishedBackgroundTasks", async () => {
    const result = await synologyApi.FileStation.clearFinishedBackgroundTasks();
    expect(result.success).toBeTruthy();
  });

  test.skip("rename", async () => {
    const fileRename = "test.svg";
    const result = await synologyApi.FileStation.rename({
      path: "/book/test1.svg",
      name: fileRename,
      additional: ["real_path", "size", "owner", "time", "perm", "type"],
    });
    if (result.success) {
      expect(result.data?.files?.[0].name).toBe(fileRename);
    }
  });
});
