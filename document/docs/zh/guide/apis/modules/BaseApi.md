# BaseApi
:::info
基础 Api 都是实例方法，主要涉及到登录登出、获取 API 列表等基础操作
:::

## connect 

连接到Synology服务器

**返回值**  

`true`: 连接成功、
`false`: 连接失败


## disconnect

断开与Synology服务器的连接

**返回值** 
`true`: 断开连接成功、
`false`: 断开连接失败

## getApiInfo

获取所有支持的API

**返回值**

:::details
```json
{
　　"data":{
　　　　"SYNO.API.Auth": {
　　　　　　"path": "entry.cgi",
　　　　　　"minVersion": 1,
　　　　　　"maxVersion": 7
　　　　},
　　　　"SYNO.FileStation.List": {
　　　　　　"path": "entry.cgi",
　　　　　　"requestFormat":"JSON"
　　　　　　"minVersion": 1,
　　　　　　"maxVersion": 2
　　　　},
　　　　"SYNO.VideoStation.Info": {
　　　　　　"path": "VideoStation/info.cgi",
　　　　　　"minVersion": 1,
　　　　　　"maxVersion": 1
　　　　},
　　　　…
　　},
　　"success": true
}
```
:::


## hasApi

检查API是否受支持

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| apiName | string | API名称 |

**返回值** 

`true`: 支持、 
`false`: 不支持

