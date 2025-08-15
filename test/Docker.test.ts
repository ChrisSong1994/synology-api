import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./helper";

describe("SynologyApi Docker", async () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi getInfo", async () => {
    const result = await synologyApi.dk.getContainerList();
    expect(result.data?.containers?.length).toBeGreaterThanOrEqual(0);
  });
});
