import { program } from "commander";
import chalk from "chalk";
import ora from "ora";

import { loadConfig } from "./config";
import { SynologyApi } from "../core";
import { SynologyApiModules, SynologyApiMethods } from "../modules";
import { printMessages } from "./helper";

export type MethodOptions = {
  params?: string;
  pretty?: boolean;
  list?: boolean;
};
export const onMethodCall = (module: string) => async (method: string, options: MethodOptions) => {
  const config = await loadConfig();
  const params = JSON.parse(options.params || "{}");
  const pretty = options.pretty;
  const connection = config.connections?.[config.used];

  if (!connection) {
    throw new Error("Connection undefined");
  }

  if (!SynologyApiMethods[module]) {
    throw new Error(`Module ${module} not found`);
  }

  // list all module methods
  if (!method && options.list) {
    const methods = SynologyApiMethods[module];
    console.log(chalk.greenBright(`${module} methods list:`));
    return printMessages(Object.keys(methods));
  }

  if (!SynologyApiMethods[module]?.[method]) {
    throw new Error(`Module method ${module} not found`);
  }

  if (typeof SynologyApiMethods[module][method] !== "function") {
    throw new Error(`Module method ${module} is not a function`);
  }

  const synologyApi = new SynologyApi(connection);
  const spinner = ora("waiting...").start();
  const result = await synologyApi[module]?.[method](params);
  spinner.stop();
  if (pretty) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(JSON.stringify(result));
  }

  synologyApi.disconnect();
  process.exit(0);
};

// register all modules

const apisCmdRegisterInfo = SynologyApiModules.map((module) => ({
  cmd: module.KEY,
  alias: module.ALIAS_KEY,
}));

export const apiCmdRegister = () => {
  apisCmdRegisterInfo.forEach((info) => {
    program
      .command(`${info.cmd} [method]`)
      .alias(info.alias)
      .option("-p,--params <params>", `${info.cmd} method params`)
      .option("--pretty", "Prettyprint JSON Output")
      .option("-l,--list", `list all ${info.cmd} methods`)
      .description(`Synology ${info.cmd} method call`)
      .action(onMethodCall(info.cmd));
  });
};
