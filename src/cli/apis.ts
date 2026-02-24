import { program } from "commander";
import chalk from "chalk";
import ora from "ora";
import fse from "fs-extra";
import path from "path";

import { loadConfig } from "./config";
import { SynologyApi } from "../core";
import { SynologyApiModules, SynologyApiMethods } from "../modules";
import { printMessages } from "./helper";

export type MethodOptions = {
  params?: string;
  beautify?: boolean;
  list?: boolean;
  output?: string;
};
export const onMethodCall = (module: string) => async (method: string, options: MethodOptions) => {
  const config = await loadConfig();
  const params = JSON.parse(options.params || "{}");
  const beautify = options.beautify ?? false;
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
  if (beautify) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(JSON.stringify(result));
  }

  if (options.output) {
    try {
      let out_path = path.resolve(options.output);
      if (!fse.existsSync(out_path)) {
        fse.ensureFileSync(out_path);
        console.log(chalk.yellowBright(`Output file created: ${out_path}`));
      }
      await fse.writeFile(out_path, JSON.stringify(result, null, 2));
      console.log(chalk.greenBright(`Output file written: ${out_path}`));
    } catch (e) {
      console.error(e);
    }
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
      .option("-b,--beautify", "Print beautify JSON data output")
      .option("-l,--list", `List all ${info.cmd} methods`)
      .option(
        "-o,--output <output>",
        "Specify the output file, no file will be created in the current folder"
      )
      .description(`Synology ${info.cmd} method call`)
      .action(onMethodCall(info.cmd));
  });
};
