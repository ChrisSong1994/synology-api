# Docker APIs

## getContainerList

Get Docker container list

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| type | string | containers  type, Default is `all` |
| limit | number | Limit number of containers |
| offset | number | Offset number of containers |

**Returns**

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
