# BaseApi

## getInfo

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
