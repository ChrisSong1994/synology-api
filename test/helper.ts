import { SynologyApi } from "../src";

export const createSynologyApi = () => {
  const synologyApi = new SynologyApi({
    server: process.env.SYNOLOGY_SERVER as string,
    username: process.env.SYNOLOGY_USER as string,
    password: process.env.SYNOLOGY_PASSWORD as string,
  });

  return synologyApi;
};

export const createTestFile = (name = "test.txt", content = "hello world", type = "text/plain") => {
  const blob = new Blob([content], { type });
  const file = new File([blob], name, {
    type: "text/plain",
    lastModified: Date.now(),
  });

  return file;
};
