import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./helper";

describe("SynologyApi User", async () => {
  const synologyApi = createSynologyApi();

  test("SynologyApi getUserList", async () => {
    const result = await synologyApi.co.getUserList();
    expect(result.success).toBeDefined();
  });

  test("SynologyApi getUserInfo", async () => {
    const result = await synologyApi.co.getUserInfo({
      name: "admin",
      additional: [
        "description",
        "email",
        "expired",
        "cannot_chg_passwd",
        "passwd_never_expire",
        "password_last_change",
      ],
    });
    expect(result.success).toBeDefined();
  });
});
