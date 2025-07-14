import fse from "fs-extra";
import path from "path";
import { program } from "commander";

import { configCmdRegister } from "./config";
import { apiCmdRegister } from "./apis";
export async function loadCli() {
  // git program info
  const pkg = await fse.readJSON(path.join(__dirname, "../../package.json"));

  // command
  program
    .name("synology")
    .usage("<command> [options]")
    .description("synology api cli tool")
    .version(pkg.version);

  // register commands
  configCmdRegister();
  apiCmdRegister();

  program.parse(process.argv);
}
