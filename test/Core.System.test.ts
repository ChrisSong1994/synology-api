import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./helper";

describe("SynologyApi System", async () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi getSystemStatus", async () => {
    const result = await synologyApi.co.getSystemStatus();
    expect(result.success).toBeDefined();
  });

  test("SynologyApi getSystemInfo", async () => {
    const result = await synologyApi.co.getSystemInfo();
    expect(result.success).toBeDefined();
  });

  test("SynologyApi getSystemUtilization", async () => {
    const result = await synologyApi.co.getSystemUtilization();
    expect(result.success).toBeDefined();
  });

  test("SynologyApi getSystemStorageInfo", async () => {
    const result = await synologyApi.co.getSystemStorageInfo();
    expect(result.success).toBeDefined();
  });

  test("SynologyApi getSystemHealth", async () => {
    const result = await synologyApi.co.getSystemHealth();
    expect(result.success).toBeDefined();
    expect(result.data.interfaces.length).toBeGreaterThan(1);
  });
});
