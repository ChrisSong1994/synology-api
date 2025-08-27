import { describe, expect, test } from "vitest";

import { createSynologyApi } from "../helper";

describe("SynologyApi FileStation upload in nodejs", async () => {
  const synologyApi = createSynologyApi();

  test("uploadFile", async () => {
    const result = await synologyApi.fs.uploadFile({
      path: "/book/yyy",
      file: "/Users/songjun/Workspace/github/node-synology-api/test/Docker.test.ts",
    });
    expect(result.data).toBeDefined();
  });
});
