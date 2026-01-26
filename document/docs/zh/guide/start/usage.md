# 使用

:::warning
首先，请确保你使用的 Node.js 版本不低于 20。
目前，该项目仅在 Synology DSM 7.1.1 版本上进行过测试，你可以尝试使用，但我无法保证它能在你的 Synology NAS 上正常运行。
:::

## 配置项

`SynologyApi` 实例化参数说明

| 配置项                 | 类型                | 说明                                                      | 默认值 |
| :----------------------: | :------------------: | :--------------------------------------------------------- | :----: |
| server                 | string              | Synology NAS 地址 或者 QuickConnectId                     |   -    |
| quickConnectServerType | proxy \| wan \| lan | 使用 QuickConnect ID 连接时，选择 QuickConnect 服务器类型 | proxy  |
| lanPriority            | boolean             | 当 quickConnectServerType 不是 lan 时，优先使用 LAN IP    | false  |
| username               | string              | Synology NAS 用户名                                       | -      |
| password               | string              | Synology NAS 密码                                         | -      |

你可以选择使用 QuickConnect ID 或者 Synology 服务器地址连接 Synology 服务器，例如：

### QuickConnect ID 连接

```js
const synologyApi = new SynologyApi({
  server: "QuickConnectId",
  quickConnectServerType: "lan", // my server is in LAN
  username: "username",
  password: "password",
});
```

### Synology 服务器地址

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

首先，你需要确认你可以跨域访问，例如在 React Native 环境中

```js
import SynologyApi from '@fett/synology-api';

const synologyApi = new SynologyApi(
  server: "https://192.168.1.1:5001", // or QuickConnectId
  username: "username",
  password: "password",
);

const info = await synologyApi.FileStation.getInfo();
```

## 在命令行界面（CLI）中使用

首先，全局安装该包

```bash
npm i -g @fett/synology-api
```

然后，运行 `syno --help` 查看帮助信息

```bash
syno --help
```

运行 `syno config -h` 查看配置相关的帮助信息

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

添加一个连接配置

```bash
syno config add ConnetionName --server=https://192.168.1.1:5001 --username=admin --password=password
```

然后，你可以使用该连接配置并执行命令

```bash
syno config use ConnetionName

syno fs getInfo --beautify # 打印文件系统信息

syno fs getInfo --output _output.json # 输出到文件

```
