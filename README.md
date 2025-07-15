# Synology Api

⚠️ The project is under development ...

[中文文档](./README-zh_CN.md)
Synology Api Node.js wrapper, can be used in Browser、CLI or Nodejs to interact with Synology NAS.
You can use domain or ip address, also supports Synology Quick Connect connect Synology server.

## Install

```
npm install @fett/synology-api
```

## Use In Browser

First you need to confirm that you can access across domains,for example in the React Native environment

```js
import { SynologyApi } from "@fett/synology-api/browser";
// Create a new instance
const api = new SynologyApi({
  server: "https://192.168.1.1:5001",
  username: "username",
  password: "password",
});
// you can now use the api by calling the methods
const info = await api.fs.getInfo();
console.log(info);
```

## Use In Node.js

```js
import SynologyApi from '@fett/synology-api';

const synologyApi = new SynologyApi(
    server: "https://192.168.1.1:5001",
  username: "username",
  password: "password",
);

const info = await synologyApi.FileStation.getInfo();
console.log(info);
```

## Use In CLI

First install the package globally

```bash
npm i -g @fett/synology-api
```

Then run cmd help message

```bash
syno --help
```

run `syno config -h` you will see the help message

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

add a connect configuration

```bash
syno config add newConnetionName --server=https://192.168.1.1:5001 --username=admin --password=password
```

then you can use it and exec command

```bash
syno config use newConnetionName

syno fs getInfo --pretty # print file system info

```
