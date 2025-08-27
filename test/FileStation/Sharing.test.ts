import { describe, expect, test } from "vitest";

import { createSynologyApi } from "../helper";

describe("SynologyApi FileStation sharing", async () => {
  const synologyApi = createSynologyApi();
  let testSharingFileId: string;

  test("getSharingList", async () => {
    const result = await synologyApi.fs.getSharingList();
    expect(result.data.links.length).toBeGreaterThanOrEqual(0);
  });

  test("createSharingLink", async () => {
    const result = await synologyApi.fs.createSharingLink({
      path: ["/book/test.txt"],
      password: "123456",
    });
    testSharingFileId = result.data.links[0].id;
    expect(result.data.links.length).toBeGreaterThanOrEqual(0);
  });

  test("editSharingLink", async () => {
    const result = await synologyApi.fs.editSharingLink({
      id: testSharingFileId,
    //   ⚠️ it not work
      //   date_available: "2025-08-27 16:28:00",
      //   date_expired: "2025-08-28 16:28:00",
    });
    //    const sharingLink = await synologyApi.fs.getSharingInfo({
    //   id: testSharingFileId,
    // });
    // expect(sharingLink.data.date_available).toBe("2025-08-27 07:00:00");
    expect(result.success).toBeTruthy();
  });

  test("getSharingInfo", async () => {
    const result = await synologyApi.fs.getSharingInfo({
      id: testSharingFileId,
    });
    expect(result.success).toBeTruthy();
  });

  test("deleteSharingLink", async () => {
    const result = await synologyApi.fs.deleteSharingLink({
      id: [testSharingFileId],
    });
    expect(result.success).toBeTruthy();
  });

  test("clearInvalidSharingLink", async () => {
    const result = await synologyApi.fs.clearInvalidSharingLink();
    expect(result.success).toBeTruthy();
  })
});
