import fse from "fs-extra";
import path from "path";
import os from "os";
import { program } from "commander";

// load config
export const loadConfig = async () => {
  const configPath = path.join(os.homedir(), "./.synology");
  const config = await fse.readJSON(configPath);
  return config;
};

export async function loadCli() {
  // 检查版本
//   const config = await loadConfig();
  const pkg = await fse.readJSON(path.join(__dirname, "../../package.json"));

  // 命令注册
  program
    .name("synology")
    .usage("<command> [options]")
    .description("synology api cli tool")
    .version(pkg.version);

  // 命令注册
  //   const createCommand = program.command('create <name>');
  //   const serveCommand = program.command('serve');
  //   const buildCommand = program.command('build');
  //   const inspectCommand = program.command('inspect');
  //   const compressCommand = program.command('zip');

  program.parse(process.argv);
}
