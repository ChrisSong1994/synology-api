import { SynologyApi } from "../src";

export const createSynologyApi = () => {
  const synologyApi = new SynologyApi({
    server: process.env.SYNOLOGY_SERVER as string,
    username: process.env.SYNOLOGY_USER as string,
    password: process.env.SYNOLOGY_PASSWORD as string,
    // agent for testing
    // agent: {
    //   http: {
    //     host: "localhost",
    //     port: 8888,
    //   },
    // },
  });

  return synologyApi;
};