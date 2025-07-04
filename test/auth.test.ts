import { describe, expect, test } from "vitest";
import { SynologyApiInfo } from "../src";

import { createSynologyApi } from "./util";

describe("SynologyApi auth", () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi login", async () => {
    const result = await synologyApi.connect();
    if (result) {
      expect(synologyApi.isConnecting).toBeTruthy();
    } else {
      expect(synologyApi.isConnecting).toBeFalsy();
    }
  });

  test("SynologyApi hasApi", () => {
    expect(synologyApi.hasApi(SynologyApiInfo.Info)).toBeTruthy();
    expect(synologyApi.hasApi("SYNO.Core.XXXX")).toBeFalsy();
  });

  test("SynologyApi logout", async () => {
    const result = await synologyApi.disconnect();
    if (result) {
      expect(synologyApi.isConnecting).toBeFalsy();
    } else {
      expect(synologyApi.isConnecting).toBeTruthy();
    }
  });

  test("SynologyApi hasApi with logout", () => {
    expect(() => synologyApi.hasApi(SynologyApiInfo.Info)).toThrowError(
      expect.objectContaining({
        message: "Not connected",
      })
    );
  });
});
