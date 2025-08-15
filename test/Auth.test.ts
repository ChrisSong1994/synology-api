import { describe, expect, test } from "vitest";
import { SynoApi } from "../src";

import { createSynologyApi } from "./helper";

describe("SynologyApi auth", () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi login", async () => {
    expect(synologyApi.isConnecting).toBeFalsy();
  });

  test("SynologyApi hasApi", async () => {
    await synologyApi.connect();
    expect(synologyApi.isConnecting).toBeTruthy();
    expect(synologyApi.hasApi(SynoApi.Info)).toBeTruthy();
    expect(synologyApi.hasApi("SYNO.Core.XXXX")).toBeFalsy();
  });

  test("SynologyApi logout", async () => {
    await synologyApi.disconnect();
    expect(synologyApi.isConnecting).toBeFalsy();
  });

  test("SynologyApi hasApi with logout", () => {
    expect(() => synologyApi.hasApi(SynoApi.Info)).toThrowError(
      expect.objectContaining({
        message: "Not connected",
      })
    );
  });

  test("SynologyApi getEncryptionInfo", async () => {
    const res = await synologyApi.au.getEncryptionInfo();
    expect(res.success).toBeDefined();
  });
});
