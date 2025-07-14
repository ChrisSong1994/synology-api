import { program } from "commander";
import { loadConfig } from "./config";
import { SynologyApi } from "../core";
import { SynologyApiKeys } from "../modules";

export type MethodOptions = {
  params?: string;
  pretty?: boolean;
};
export const onMethodsCall = (module: string) => async (method: string, options: MethodOptions) => {
  const config = await loadConfig();
  const params = JSON.parse(options.params || "{}");
  const pretty = options.pretty;
  const synologyApi = new SynologyApi(config.connections[config.used]);

  if (synologyApi[module]?.[method]) {
    const result = await synologyApi[module]?.[method](params);
    if (pretty) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(JSON.stringify(result));
    }
  }
  synologyApi.disconnect();
  process.exit(0);
};

// register all modules

const apisCmdRegisterInfo = [
  {
    cmd: SynologyApiKeys.FileStation,
    alias: SynologyApiKeys.fs,
  },
  {
    cmd: SynologyApiKeys.AudioStation,
    alias: SynologyApiKeys.as,
  },
];

export const apiCmdRegister = () => {
  apisCmdRegisterInfo.forEach((info) => {
    program
      .command(`${info.cmd} [methods]`)
      .alias(info.alias)
      .option("-p,--params <params>", `${info.cmd} methods params`)
      .option("--pretty", "Prettyprint JSON Output")
      .description(`Synology ${info.cmd} method call`)
      .action(onMethodsCall(info.cmd));
  });
};
