import { describe, expect, test } from "vitest";

import { createSynologyApi } from "../helper";

describe("SynologyApi FileStation CopyMove", async () => {
  const synologyApi = createSynologyApi();

  test("CopyMove", async () => {
    const result = await synologyApi.fs.startCopyMove({
      path: "/book/test.txt",
      dest_folder_path: "/book/xxxx",
      overwrite: true,
      remove_src: false,
    });

    expect(result.data.taskid).toBeDefined();

    const status = await synologyApi.fs.getCopyMoveStatus({
      taskid: result.data.taskid,
    });

    expect(status.data.finished).toBeTruthy();
  });
});
