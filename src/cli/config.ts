import fse from "fs-extra";
import path from "path";
import os from "os";
import { program } from "commander";
import chalk from "chalk";
import { isLowerCaseEqual, printMessages, geneDashLine } from "./helper";

const CONFIG_FILE_PATH =
  process.env.NODE_ENV === "development"
    ? path.join(process.cwd(), "./.userdata/.synology-api.json")  // development
    : path.join(os.homedir(), "./.synology-api.json");

export type ConfigEntry = {
  server: string;
  username: string;
  password: string;
};

export type Config = {
  used: string;
  connections: Record<string, ConfigEntry>;
};

// load config
export const loadConfig = async (): Promise<Config> => {
  if (!(await fse.pathExists(CONFIG_FILE_PATH))) {
    await fse.ensureFile(CONFIG_FILE_PATH);
    await fse.writeJSON(CONFIG_FILE_PATH, {
      used: "",
      connections: {},
    });
  }
  const config = await fse.readJSON(CONFIG_FILE_PATH);
  return config;
};

// update config
export const updateConfig = async (config: Config) => {
  await fse.writeJSON(CONFIG_FILE_PATH, config);
};

// check config
export const checkConfig = async () => {};
export const configCmdRegister = () => {
  const configCmd = program.command("config").description("synology api config management");

  // list connection config
  configCmd
    .command("ls")
    .description("List all the connection config")
    .action(async () => {
      const config = await loadConfig();
      const keys = Object.keys(config.connections);
      const dashLineLength = Math.max(...keys.map((key) => key.length)) + 3;
      const messages = keys.map((key) => {
        const connection = config.connections[key];
        const prefix = isLowerCaseEqual(key, config.used) ? chalk.green.bold("* ") : "  ";
        return (
          prefix +
          key +
          geneDashLine(key, dashLineLength) +
          connection.server +
          ":" +
          connection.username +
          ":" +
          connection.password
        );
      });
      printMessages(messages);
    });

  // add connection
  configCmd
    .command("add [name]")
    .description("Add connection config")
    .requiredOption("-s, --server <server>", "Synology server domain  or QuickConnect ID ")
    .requiredOption("-u, --username <username>", "username")
    .requiredOption("-p,  --password <password>", "password")
    .action(async (name, options) => {
      if (!name.trim()) throw new Error("Plaease input connection name");
      // 实际代码中应保存配置到文件
      const config = await loadConfig();
      const newConfig = {
        ...config,
        connections: {
          ...config.connections,
          [name]: {
            server: options.server,
            username: options.username,
            password: options.password,
          },
        },
      };
      await updateConfig(newConfig);
    });

  // use  connection
  configCmd
    .command("use [name]")
    .description("Change current connection")
    .action(async (name) => {
      const config = await loadConfig();
      if (config.used === name) return;
      if (!config.connections[name]) {
        console.log("Connection not found");
        return;
      }
      config.used = name;
      await updateConfig(config);
    });

  // del connection
  configCmd
    .command("del [name]")
    .description("Remove a connection")
    .action(async (name) => {
      console.log("Remove a connection", name);
      const config = await loadConfig();
      // 删除配置
      if (!config.connections[name]) {
        console.log("Connection not found");

        return;
      }
      delete config.connections[name];
      if (config.used === name) {
        config.used = "";
      }
      await updateConfig(config);
    });

  // Change connection name
  configCmd
    .command("rename <name> <newName>")
    .description("Change connection name")
    .action(async (name, newName) => {
      const config = await loadConfig();
      if (!config.connections[name]) {
        console.log("Connection not found");
        return;
      }
      config.connections[newName] = config.connections[name];
      delete config.connections[name];
      if (config.used === name) {
        config.used = newName;
      }
      await updateConfig(config);
    });
};
