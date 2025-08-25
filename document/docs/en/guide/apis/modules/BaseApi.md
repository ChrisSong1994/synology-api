# BaseApi

:::info
Basic Api are instance methods, which mainly involve basic operations such as logging in and out, obtaining API lists, etc
:::

## connect 

Connect to Synology server

**Returns** 

`true`: connected successfully 、
`false`: failed to connect


## disconnect

Disconnect from Synology server

**Returns**

`true`: disconnected successfully 、
`false`: failed to disconnect

## getApiInfo

Get all supported APIs

**Returns**

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

Check if the API is supported

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| apiName | string | API name |

**Returns**

`true`: supported、
`false`: not supported

