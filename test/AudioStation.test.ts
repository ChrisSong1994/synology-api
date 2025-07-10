import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./util";

describe("SynologyApi AudioStation", async () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi getSongList", async () => {
    const result = await synologyApi.as.getSongList({
      limit: 10,
      offset: 0,
    });

    expect(result.success).toBeDefined();
  });
});
