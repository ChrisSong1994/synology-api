import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./util";

describe("SynologyApi FileStation", async () => {
  const synologyApi = createSynologyApi();
  await synologyApi.connect();

  if (synologyApi.isConnecting) {
    test("FileStation Info  getInfo", async () => {
      const result = await synologyApi.FileStation.getInfo();

      expect(result.success).toBeDefined();
    });
  }
});
