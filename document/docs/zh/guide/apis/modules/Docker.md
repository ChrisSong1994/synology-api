# Docker APIs

## getContainerList

获取Docker容器列表

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| type | string | 容器类型，默认为 `all` |
| limit | number | 容器数量限制 |
| offset | number | 容器偏移数量 |

**返回值**

:::details

```json
{
  "containers": [
    {
      "State": {
        "Dead": false,
        "Error": "",
        "ExitCode": 0,
        "FinishedAt": "2000-01-01T08:01:22.816559885+08:00",
        "FinishedTs": 946684882,
        "OOMKilled": false,
        "Paused": false,
        "Pid": 28923,
        "Restarting": false,
        "Running": true,
        "StartedAt": "2025-05-27T00:42:48.456435282Z",
        "StartedTs": 1748306568,
        "Status": "running"
      },
      "cmd": "/bin/bash",
      "created": 1658327865,
      "enable_service_portal": false,
      "exporting": false,
      "finish_time": 946684882,
      "id": "2779c7eded217b465d9afcc763941fd840a3fc107d0c64280bd9e85177071640",
      "image": "centos:7",
      "is_ddsm": false,
      "is_package": false,
      "name": "CentOS7.APE",
      "services": null,
      "status": "running",
      "up_status": "Up 2 months",
      "up_time": 1748306568
    }
  ],
  "limit": 1,
  "offset": 0,
  "total": 1
}
```

:::
