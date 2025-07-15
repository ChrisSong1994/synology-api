import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./util";

describe("SynologyApi VideoStation", async () => {
  const synologyApi = createSynologyApi();

  test("VideoStation getInfo", async () => {
    const result = await synologyApi.vs.getInfo();
    expect(result.success).toBeDefined();
  });
});
