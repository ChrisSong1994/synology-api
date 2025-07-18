import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./util";

describe("SynologyApi VideoStation", async () => {
  const synologyApi = createSynologyApi();

  test("VideoStation getInfo", async () => {
    const result = await synologyApi.vs.getInfo();
    expect(result.success).toBeDefined();
  });

  test("VideoStation getLibrary", async () => {
    const result = await synologyApi.vs.getLibrary();
    expect(result.data.library.length).toBeGreaterThan(0);
    expect(result.success).toBeDefined();
  });

   test("VideoStation getAcrossLibrary", async () => {
    const result = await synologyApi.vs.getAcrossLibrary();
    expect(result.data.movie.length).toBeGreaterThan(0);
    expect(result.success).toBeDefined();
  });
});
