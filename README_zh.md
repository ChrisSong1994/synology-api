# JavaScript Synology API

<p align="center">
  <a>
    <img width="100" src="assets/logo.png">
  </a>
</p>
<h1 align="center">JavaScript Synology API</h1>

![NPM 版本](https://img.shields.io/npm/v/%40fett%2Fsynology-api) ![NPM 下载量](https://img.shields.io/npm/dm/%40fett%2Fsynology-api) ![GitHub 许可证](https://img.shields.io/github/license/chrissong1994/synology-api) ![vitest](https://img.shields.io/badge/tested_with-vitest-brightgreen)

📖 [English Readme](./README.md)
🔎 [API 文档](https://chrissong1994.github.io/synology-api/zh/index.html)

Synology API JavaScript 封装库，可在浏览器、CLI 或 Node.js 中与 Synology NAS 交互。
您可以使用域名或 IP 地址，也支持通过 Synology Quick Connect 连接服务器。
所有 API 来自 [https://kb.synology.cn](https://kb.synology.cn/zh-cn/search?query=API&services%5B%5D=File_Station)

## 安装

```
npm install @fett/synology-api
```

## 配置

`SynologyApi` 实例参数说明

| 参数名 | 类型 | 描述 | 默认值 |
| :----: | :----: | :---- | :----: |
| server | string | Synology NAS 地址或 QuickConnectId | - |
| quickConnectServerType | proxy \| wan \| lan | 通过 QuickConnect ID 连接时的服务器类型 | proxy |
| lanPriority | boolean | 当 quickConnectServerType 不是 lan 时，优先使用 LAN IP | false |
| username | string | Synology NAS 用户名 | - |
| password | string | Synology NAS 密码 | - |

您可以选择使用 **QuickConnectId** 或 **Synology 服务器地址** 连接，例如：

### 通过 QuickConnectId 连接

```js
const synologyApi = new SynologyApi({
  server: "QuickConnectId",
  quickConnectServerType: "lan", // my server is in LAN
  username: "username",
  password: "password",
});
```

### 通过 Synology 服务器地址连接

```js
const synologyApi = new SynologyApi({
  server: "https://192.168.1.1:5001",
  username: "username",
  password: "password",
});
```

## 在浏览器或 Node.js 中使用

```bash
npm install @fett/synology-api
```

首先需要确认您可以跨域访问，例如在 React Native 环境中：

```js
import SynologyApi from '@fett/synology-api';

const synologyApi = new SynologyApi(
  server: "https://192.168.1.1:5001", // or QuickConnectId
  username: "username",
  password: "password",
);

const info = await synologyApi.FileStation.getInfo();
```

## 在 CLI 中使用

首先全局安装包：

```bash
npm i -g @fett/synology-api
```

然后运行帮助命令：

```bash
syno --help
```

运行 `syno config -h` 查看配置帮助：

```bash
Usage: synology config [options] [command]

synology api config management

Options:
  -h, --help               display help for command

Commands:
  ls                       List all the connection config
  add [options] [name]     Add connection config
  use [name]               Change current connection
  del [name]               Remove a connection
  rename <name> <newName>  Change connection name
  help [command]           display help for command
```

添加连接配置：

```bash
syno config add ConnetionName --server=https://192.168.1.1:5001 --username=admin --password=password
```

然后可以使用并执行命令：

```bash
syno config use ConnetionName

syno fs getInfo --beautify # print file system info
```

## 许可证

[MIT](https://github.com/ChrisSong1994/synology-api/blob/main/LICENSE)