# FileStation APIs

## getInfo

提供 File Station 信息

**返回值**

:::details

```json
{
  "data": {
    "enable_list_usergrp": false,
    "enable_send_email_attachment": true,
    "enable_view_google": true,
    "enable_view_microsoft": true,
    "hostname": "HomeYun",
    "is_manager": true,
    "items": [
      {
        "gid": 1030
      },
      {
        "gid": 1013
      },
      {
        "gid": 10223
      }
    ],
    "support_file_request": true,
    "support_sharing": true,
    "support_vfs": true,
    "support_virtual": {
      "enable_iso_mount": true,
      "enable_remote_mount": true
    },
    "support_virtual_protocol": ["cifs", "nfs", "iso"],
    "system_codepage": "chs",
    "uid": 102644
  },
  "success": true
}
```

:::

## getFileList

枚举指定文件夹中的文件。

**参数**

| 名称           | 类型                                                                                        | 描述                     |
| -------------- | ------------------------------------------------------------------------------------------- | ------------------------ |
| folder_path    | string                                                                                      | 文件夹路径。             |
| filetype       | "file" \| "dir" \| "all"                                                                    | 要过滤的文件类型。       |
| additional     | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type" \| "mount_point_type"> | 要返回的附加字段。       |
| pattern        | string                                                                                      | 过滤模式。               |
| limit          | number                                                                                      | 返回文件的最大数量。     |
| offset         | number                                                                                      | 第一个返回文件的偏移量。 |
| sort_by        | string                                                                                      | 排序字段。               |
| sort_direction | string                                                                                      | 排序方向。               |

**返回值**

:::details

```json
{
  "data": {
    "files": [
      {
        "additional": {
          "owner": {
            "gid": 100,
            "group": "users",
            "uid": 1024,
            "user": "admin"
          },
          "perm": {
            "acl": {
              "append": true,
              "del": true,
              "exec": true,
              "read": true,
              "write": true
            },
            "is_acl_mode": false,
            "posix": 777
          },
          "real_path": "/volume1/video/1",
          "size": 4096,
          "time": {
            "atime": 1370104559,
            "crtime": 1370104559,
            "ctime": 1370104559,
            "mtime": 1369728913
          },
          "type": ""
        },
        "isdir": true,
        "name": "1",
        "path": "/video/1"
      }
    ],
    "total": 2
  },
  "success": true
}
```

:::

## getShareFileList

列出所有共享文件夹。

**参数**
| 名称 | 类型 | 描述 |
| --- | --- | --- |
| limit | number | 返回项目的最大数量。 |
| offset | number | 第一个返回项目的偏移量。 |
| sort_by | string | 排序字段。 |
| sort_direction | "ASC" \| "DESC" | 排序方向。 |
| additional | string[] | 要返回的附加字段。 |
| onlywritable | boolean | 是否只返回可写文件夹。 |

**返回值**

:::details

```json
{
  "data": {
    "shares": [
      {
        "isdir": true,
        "name": "video",
        "path": "/video",
        "additional": {
          "owner": {
            "gid": 100,
            "group": "users",
            "uid": 1024,
            "user": "admin"
          },
          "real_path": "/volume1/video",
          "time": {
            "atime": 1374918626,
            "crtime": 1363259974,
            "ctime": 1371713685,
            "mtime": 1371713685
          }
        }
      }
    ],
    "offset": 0,
    "total": 1
  },
  "success": true
}
```

:::

## getVirtualFolderList

列出虚拟文件系统的所有挂载点文件夹，例如 CIFS 或 ISO。

**参数**

| 名称           | 类型                                                                                       | 描述                     |
| -------------- | ------------------------------------------------------------------------------------------ | ------------------------ |
| type           | "Nfs" \| "cifs" \| "iso"                                                                   | 虚拟文件夹的类型。       |
| limit          | number                                                                                     | 返回项目的最大数量。     |
| offset         | number                                                                                     | 第一个返回项目的偏移量。 |
| sort_by        | string                                                                                     | 排序字段。               |
| sort_direction | "ASC" \| "DESC"                                                                            | 排序方向。               |
| additional     | Array<"real_path" \| "owner" \| "time" \| "perm" \| "mount_point_type" \| "volume_status"> | 要返回的附加字段。       |

**返回值**

:::details

```json
{
  "data": {
    "folders": [
      {
        "additional": {
          "mount_point_type": "remote",
          "owner": {
            "gid": 100,
            "group": "users",
            "uid": 1024,
            "user": "admin"
          },
          "perm": {
            "acl": {
              "append": true,
              "del": true,
              "exec": true,
              "read": true,
              "write": true
            },
            "is_acl_mode": false,
            "posix": 777
          },
          "real_path": "/volume1/vidoe/remote",
          "time": {
            "atime": 1372313445,
            "crtime": 1320204670,
            "ctime": 1371206944,
            "mtime": 1371206944
          },
          "volume_status": {
            "freespace": 12282422599680,
            "readonly": false,
            "totalspace": 801958928384
          }
        },
        "isdir": true,
        "name": "remote",
        "path": "/video/remote"
      }
    ],
    "offset": 0,
    "total": 1
  },
  "success": true
}
```

:::

## startSearch

根据给定条件开始搜索文件。如果在不同参数中给出多个条件，搜索的文件将匹配所有这些条件。

**参数**

| 名称           | 类型                     | 描述                 |
| -------------- | ------------------------ | -------------------- |
| folder_path    | string                   | 要搜索的文件夹路径。 |
| pattern        | string                   | 过滤模式。           |
| filetype       | "file" \| "dir" \| "all" | 要过滤的文件类型。   |
| recursive      | boolean                  | 是否递归搜索。       |

**返回值**

:::details

```json
{
  "data": {
    "taskid": "1234567890"
  },
  "success": true
}
```

:::

## stopSearch

停止搜索任务。

**参数**

| 名称   | 类型   | 描述      |
| ------ | ------ | --------- |
| taskid | string | 任务 ID。 |

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## getSearchList

获取搜索任务列表。

**参数**

| 名称       | 类型                     | 描述               |
| ---------- | ------------------------ | ------------------ |
| taskid     | string                   | 任务 ID。          |
| additional | string[]                 | 要返回的附加字段。 |
| filetype   | "file" \| "dir" \| "all" | 要过滤的文件类型。 |
| limit      | number                   | 限制结果数量。     |
| offset     | number                   | 结果偏移量。       |

**返回值**

:::details

```json
{
  "data": {
    "files": [
      {
        "additional": {
          "owner": {
            "gid": 100,
            "group": "users",
            "uid": 1024,
            "user": "admin"
          },
          "perm": {
            "acl": {
              "append": true,
              "del": true,
              "exec": true,
              "read": true,
              "write": true
            },
            "is_acl_mode": false,
            "posix": 644
          },
          "real_path": "/volume1/video/12",
          "size": 0,
          "time": {
            "atime": 1370002059,
            "crtime": 1370002059,
            "ctime": 1370002099,
            "mtime": 1370002059
          },
          "type": ""
        },
        "isdir": false,
        "name": "12",
        "path": "/video/12"
      }
    ],
    "total": 1
  },
  "success": true
}
```

:::

## cleanSearch

删除搜索临时数据库。

**参数**

| 名称   | 类型   | 描述      |
| ------ | ------ | --------- |
| taskid | string | 任务 ID。 |

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## createFolder

创建文件夹。

**参数**

| 名称         | 类型                                                                  | 描述               |
| ------------ | --------------------------------------------------------------------- | ------------------ |
| folder_path  | string                                                                | 文件夹路径。       |
| name         | string                                                                | 文件夹名称。       |
| force_parent | boolean                                                               | 强制创建父文件夹。 |
| additional   | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type"> | 附加信息。         |

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "folders": [
      {
        "isdir": true,
        "name": "test",
        "path": "/video/test"
      }
    ]
  }
}
```

:::

## getFavoriteList

获取收藏夹列表。

**参数**

| 名称           | 类型                                                                  | 描述           |
| -------------- | --------------------------------------------------------------------- | -------------- |
| limit          | number                                                                | 限制结果数量。 |
| offset         | number                                                                | 结果偏移量。   |
| sort_by        | string                                                                | 排序字段。     |
| sort_direction | "ASC" \| "DESC"                                                       | 排序方向。     |
| additional     | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type"> | 附加信息。     |
| status_filter  | string                                                                | 状态过滤器。   |

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "favorites": [
      {
        "isdir": true,
        "name": "My Video Shared folder",
        "path": "/video",
        "status": "valid"
      },
      {
        "isdir": false,
        "name": "deletedfolder",
        "path": "/share/deletedfolder",
        "status": "broken"
      }
    ]
  }
}
```

:::

## addFavorite

将文件夹添加到用户收藏夹。

**参数**

| 名称  | 类型   | 描述                 |
| ----- | ------ | -------------------- |
| path  | string | 要添加的文件夹路径。 |
| name  | string | 文件夹名称。         |
| index | number | 文件夹索引。         |

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## deleteFavorite

从用户收藏夹中删除文件夹。

**参数**

| 名称 | 类型   | 描述                 |
| ---- | ------ | -------------------- |
| path | string | 要删除的文件夹路径。 |

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## clearBrokenFavorite

删除所有损坏状态的收藏夹。

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## getThumbUrl

获取文件的缩略图
注意：

- 1. 支持的图像格式：jpg, jpeg, jpe, bmp, png, tif, tiff, gif, arw, srf, sr2, dcr, k25, kdc, cr2, crw, nef, mrw,
     ptx, pef, raf, 3fr, erf, mef, mos, orf, rw2, dng, x3f, heic, raw。
- 2. 索引文件夹中支持的视频格式：3gp, 3g2, asf, dat, divx, dvr-ms, m2t, m2ts, m4v, mkv, mp4,
     mts, mov, qt, mpeg, mpg, mpe, m1v, m2v, ogv, rm, rmvb, vob, wmv, xvid, avi, flv, m4v。

**参数**

| 名称   | 类型                                        | 描述             |
| ------ | ------------------------------------------- | ---------------- |
| path   | string                                      | 图像文件路径。   |
| size   | "small" \| "medium" \| "large" \| "original" | 缩略图大小。     |
| rotate | 0 \| 1 \| 2 \| 3 \| 4                       | 旋转选项。       |

**返回值**

:::details

```json
{
  "success": true,
  "data": "https://synology_ip:5001/webapi/entry.cgi?api=SYNO.FileStation.Thumb&version=2&method=get&path=%2Fvideo%2Ftest.jpg&size=small&_sid=xxxx"
}
```

:::

## getDownloadFile

下载文件或文件夹。

**参数**

| 名称         | 类型                           | 描述                                                                 |
| ------------ | ------------------------------ | -------------------------------------------------------------------- |
| path         | string                         | 文件路径。                                                           |
| mode         | "download" \| "open"           | 下载模式。                                                           |
| responseType | "stream" \| "blob" \| "arraybuffer" | 响应类型，默认 json。如果设置为 stream，则返回 stream 对象。 |

**返回值**

如果 responseType 为 stream，则返回 stream 对象。否则返回 json 对象。

## startDirSizeCalc

开始计算一个或多个文件/文件夹路径的大小
**参数**
|名称|类型|描述|
|----|----|----|
|paths|string|要计算大小的文件/文件夹路径。多个路径可以用逗号","分隔|

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "taskid": "1234567890"
  }
}
```

:::

## stopDirSizeCalc

停止计算一个或多个文件/文件夹路径的大小
**参数**

| 名称   | 类型   | 描述      |
| ------ | ------ | --------- |
| taskid | string | 任务 ID。 |

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## getDirSizeCalcStatus

获取大小计算任务的状态。
**参数**

| 名称   | 类型   | 描述      |
| ------ | ------ | --------- |
| taskid | string | 任务 ID。 |

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "finished": true,
    "num_dir": 1,
    "num_file": 1,
    "total_size": 1000000
  }
}
```

:::

## startMD5Calc

开始计算文件的 MD5 值。
**参数**

| 名称      | 类型   | 描述       |
| --------- | ------ | ---------- |
| file_path | string | 文件路径。 |

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "taskid": "1234567890"
  }
}
```

:::

## stopMD5Calc

停止计算文件的 MD5 值。
**参数**

| 名称   | 类型   | 描述      |
| ------ | ------ | --------- |
| taskid | string | 任务 ID。 |

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## getMD5CalcStatus

获取 MD5 计算任务的状态。
**参数**

| 名称   | 类型   | 描述      |
| ------ | ------ | --------- |
| taskid | string | 任务 ID。 |

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "finished": true,
    "md5": "4124bc0a9335c27f086f24ba207a4912"
  }
}
```

:::

## checkPermission

检查已登录用户是否有在指定文件夹中创建新文件/文件夹的写入权限。
**参数**

| 名称        | 类型    | 描述                                      |
| ----------- | ------- | ----------------------------------------- |
| path        | string  | 文件夹路径。                              |
| filename    | string  | 文件名称。                                |
| overwrite   | boolean | 如果为 true，则在文件已存在时覆盖文件。   |
| create_only | boolean | 如果为 true，则仅在文件不存在时创建文件。 |

**返回值**

:::details

```json
{
  "success": true
}
```

:::

## rename

重命名文件或文件夹。
**参数**

| 名称          | 类型                                                                  | 描述                                                                         |
| ------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| path          | string                                                                | 文件或文件夹的路径。                                                         |
| name          | string                                                                | 新名称。                                                                     |
| additional    | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type"> | 要返回的附加信息。                                                           |
| search_taskid | string                                                                | 可选。从 start 方法获得的搜索任务的唯一 ID。用于更新搜索结果中的重命名文件。 |

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "files": [
      {
        "isdir": true,
        "name": "test2",
        "path": "/video/test2"
      }
    ]
  }
}
```

:::

## getBackgroundTaskList

列出所有后台任务，包括复制、移动、删除、压缩和解压缩任务。
**Parameters**

| Name             | Type            | Description                                                                                                                     |
| ---------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| "limit"          | number          | Limit the number of tasks returned. Default is 100.                                                                             |
| "offset"         | number          | Offset the number of tasks returned. Default is 0.                                                                              |
| "sort_by"        | string          | Sort by. Default is "taskid".                                                                                                   |
| "sort_direction" | "ASC" \| "DESC" | Sort direction. Default is "ASC".                                                                                               |
| "api_filter"     | string[]        | API filter. Default is SYNO.FileStation.CopyMove,SYNO.FileStation.Delete,SYNO.FileStation.Extract or SYNO.FileStation.Compress. |

**Returns**

:::details

```json
{
  "success": true,
  "data": {
    "tasks": [
      {
        "api": "SYNO.FileStation.CopyMove",
        "crtime": 1372926088,
        "finished": true,
        "method": "start",
        "params": {
          "accurate_progress": true,
          "dest_folder_path": "/video/test",
          "overwrite": true,
          "path": ["/video/test2/test.avi"],
          "remove_src": false
        },
        "path": "/video/test2/test.avi",
        "processed_size": 12800,
        "processing_path": "/video/test2/test.avi",
        "progress": 1,
        "taskid": "FileStation_51D53088860DD653",
        "total": 12800,
        "version": 1
      }
    ],
    "offset": 0,
    "total": 1
  }
}
```

## clearFinishedBackgroundTasks

删除所有已完成的后台任务.

**Parameters**
| Name | Type | Description |
| --- | --- | --- |
|taskid | string | Task ID |

**Returns**
None


## startDeleteFile

开始删除文件任务

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| path | string \|Array<string> | 一个或多个要删除的文件/文件夹路径，以共享文件夹开头，用逗号","分隔并用括号括起来。 |
|accurate_progress | boolean | 是否计算准确的进度。默认为true。 |
| recursive | boolean | 递归删除文件夹内的文件 |
|search_taskid| string | 搜索任务ID|

**返回值**

:::details

```json
{
  "success": true,
"data":{"taskid": "FileStation_51D00B7912CDE0B0}
}
```

:::

## stopDeleteFile

停止删除任务。

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| taskid | string | 任务ID |

**返回值**
无

## getDeleteFileStatus

获取删除文件任务的状态

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| taskid | string | 任务ID |

**返回值**

:::details

```json
{
  "success": true,
  "data": {
    "finished": false,
    "path": "/video/1000",
    "processed_num": 193,
    "processing_path": "/video/1000/509",
    "progress": 0.03199071809649467,
    "total": 6033
  }
}
```

:::

## getSharingInfo

通过分享链接ID获取分享链接的信息。

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| id | string | 分享链接ID |

**返回值**

:::details

```json
{
  "data": {
    "date_available": "0",
    "date_expired": "0",
    "has_password": false,
    "id": "pHTBKQf9",
    "isFolder": false,
    "link_owner": "admin",
    "name": "ITEMA_20448251-0.mp3",
    "path": "/test/ITEMA_20448251-0.mp3",
    "status": "valid",
    "url": "http://myds.com:5000/fbsharing/pHTBKQf9"
  },
  "success": true
}
```

:::

## getSharingList

列出用户的文件分享链接。

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| offset | number | 文件分享链接偏移量 |
| limit | number | 文件分享链接限制 |
| sort_by | string | 排序字段 |
| sort_direction | "ASC" \| "DESC" | 排序方向 |
| force_clean |boolean| 如果设置为false，将从缓存数据库中快速检索数据。如果设置为true，将同步所有分享信息，包括分享状态和分享所有者的用户名。这会消耗一些时间|

**返回值**

:::details

```json
{
  "data": {
    "links": [
      {
        "date_available": "0",
        "date_expired": "0",
        "has_password": false,
        "id": "pHTBKQf9",
        "isFolder": false,
        "link_owner": "admin",
        "name": "ITEMA_20448251-0.mp3",
        "path": "/test/ITEMA_20448251-0.mp3",
        "status": "valid",
        "url": "http://myds.com:5000/fbsharing/pHTBKQf9"
      }
    ],
    "offset": 0,
    "total": 1
  },
  "success": true
}
```

:::

## createSharingLink

通过文件/文件夹路径生成一个或多个分享链接。

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| path | string \| Array<string> | 文件/文件夹路径 |
|password| string | 分享链接的密码 |
| date_expired | string | 分享链接的过期日期，格式为YYYY-MM-DD。当设置为0（默认）时，分享链接是永久的。 |
|date_available | string | 分享链接生效的可用日期，格式为YYYY-MM-DD。当设置为0（默认）时，分享链接在创建后立即有效|

**返回值**

:::details

```json
{
  "data": {
    "links": [
      {
        "error": 0,
        "id": "y4LmvpaX",
        "path": "/test/ITEMA_20445972-0.mp3",
        "qrcode": "iVBORw0KGgoAAAANSUh...",
        "url": "http://myds.com:5000/fbsharing/y4LmvpaX"
      }
    ]
  },
  "success": true
}
```

:::

## deleteSharingLink

删除一个或多个分享链接

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| id | string \| Array<string> | 要删除的文件分享链接的唯一ID，用逗号","分隔并用括号括起来 |

**返回值**
无

## clearInvalidSharingLink

删除所有过期和损坏的分享链接。

**返回值**
无

## editSharingLink

编辑一个或多个分享链接

**参数**

| 名称           | 类型          | 描述                                                                                                                                                                  |
| -------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | Array<string> | 分享链接ID                                                                                                                                                             |
| password       | string        | 分享链接的密码                                                                                                                                                |
| date_expired   | string        | 分享链接的过期日期，格式为YYYY-MM-DD。当设置为0（默认）时，分享链接是永久的。                                           |
| date_available | string        | 分享链接生效的可用日期，格式为YYYY-MM-DD。当设置为0（默认）时，分享链接在创建后立即有效 |

**返回值**
无

## startCopyMove

开始复制/移动文件。

path: string;
dest_folder_path: string;
overwrite?: boolean;
remove_src?: boolean; // true：移动文件/文件夹。false：复制文件/文件夹
search_taskid?: string;
accurate_progress?: boolean;

**参数**

| 名称              | 类型    | 描述                                            |
| ----------------- | ------- | ------------------------------------------------------ |
| path              | string  | 要复制/移动的文件/文件夹的路径。        |
| dest_folder_path  | string  | 目标文件夹路径。                           |
| overwrite         | boolean | 是否覆盖目标文件/文件夹。      |
| remove_src        | boolean | true：移动文件/文件夹。false：复制文件/文件夹 |
| search_taskid     | string  | 搜索任务ID。                                    |
| accurate_progress | boolean | 是否获取准确的进度。                      |

**返回值**

:::details

```json
{
  "data": {
    "taskid": "FileStation_51D00B7912CDE0B0"
  },
  "success": true
}
```

:::

## getCopyMoveStatus

获取复制/移动任务的状态

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| taskid | string | 任务ID。 |

**返回值**

:::details

```json
{
  "data": {
    "dest_folder_path": "/video/test",
    "finished": false,
    "path": "/video/test.avi",
    "processed_size": 1057,
    "progress": 0.01812258921563625,
    "total": 58325
  },
  "success": true
}
```

:::

## stopCopyMove

停止复制/移动任务。

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| taskid | string | 任务ID。 |

**返回值**
无