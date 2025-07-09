import { describe, expect, test } from "vitest";
import { SynologyApiInfo } from "../src";

import { createSynologyApi } from "./util";

describe("SynologyApi auth", () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi login", async () => {
    expect(synologyApi.isConnecting).toBeFalsy();
  });

  test("SynologyApi hasApi", async () => {
    await synologyApi.connect();
    expect(synologyApi.isConnecting).toBeTruthy();
    expect(synologyApi.hasApi(SynologyApiInfo.Info)).toBeTruthy();
    expect(synologyApi.hasApi("SYNO.Core.XXXX")).toBeFalsy();
  });

  test("SynologyApi logout", async () => {
    await synologyApi.disconnect();
    expect(synologyApi.isConnecting).toBeFalsy();
  });

  test("SynologyApi hasApi with logout", () => {
    expect(() => synologyApi.hasApi(SynologyApiInfo.Info)).toThrowError(
      expect.objectContaining({
        message: "Not connected",
      })
    );
  });
});
