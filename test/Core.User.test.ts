import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./helper";

describe("SynologyApi User", async () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi getUserList", async () => {
    const result = await synologyApi.co.getUserList();
    expect(result.success).toBeDefined();
  });
});
