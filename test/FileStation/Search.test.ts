import { describe, expect, test } from "vitest";

import { createSynologyApi } from "../helper";

describe("SynologyApi FileStation Search", async () => {
  const synologyApi = createSynologyApi();

  test("startSearch", async () => {
    const result = await synologyApi.fs.startSearch({
      folder_path: "/book",
      pattern: "test",
    });

    expect(result.data.taskid).toBeDefined();

    const searchList = await synologyApi.fs.getSearchList({
      taskid: result.data.taskid,
    });
    if (searchList.data.finished) {
      expect(searchList.data.finished).toBe(true);
    }
  });
});
