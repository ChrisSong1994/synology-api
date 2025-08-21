# FileStation APIs

## getInfo

Provide File Station information

**Returns**

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

Enumerate files in a given folder.

**Parameters**

| Name           | Type                                                                                        | Description                         |
| -------------- | ------------------------------------------------------------------------------------------- | ----------------------------------- |
| folder_path    | string                                                                                      | Path to the folder.                 |
| filetype       | "file" \| "dir" \| "all"                                                                    | File type to filter.                |
| additional     | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type" \| "mount_point_type"> | Additional fields to return.        |
| pattern        | string                                                                                      | Pattern to filter.                  |
| limit          | number                                                                                      | Maximum number of files to return.  |
| offset         | number                                                                                      | Offset of the first file to return. |
| sort_by        | string                                                                                      | Field to sort by.                   |
| sort_direction | string                                                                                      | Sort direction.                     |

**Returns**

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

List all shared folders.

**Parameters**
| Name | Type | Description |
| --- | --- | --- |
| limit | number | The maximum number of items to return. |
| offset | number | The offset of the first item to return. |
| sort_by | string | The field to sort by. |
| sort_direction | "ASC" \| "DESC" | The sort direction. |
| additional | string[] | The additional fields to return. |
| onlywritable | boolean | Whether to return only writable folders. |

**Returns**

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

List all mount point folders of virtual file system, e.g., CIFS or ISO.

**Parameters**

| Name           | Type                                                                                       | Description                             |
| -------------- | ------------------------------------------------------------------------------------------ | --------------------------------------- |
| type           | "Nfs" \| "cifs" \| "iso"                                                                   | The type of virtual folder.             |
| limit          | number                                                                                     | The maximum number of items to return.  |
| offset         | number                                                                                     | The offset of the first item to return. |
| sort_by        | string                                                                                     | The field to sort by.                   |
| sort_direction | "ASC" \| "DESC"                                                                            | The sort direction.                     |
| additional     | Array<"real_path" \| "owner" \| "time" \| "perm" \| "mount_point_type" \| "volume_status"> | The additional fields to return.        |

**Returns**

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

Start to search files according to given criteria. If more than one criterion is given in different parameters,
searched files match all these criteria.

**Parameters**

| Name           | Type                     | Description                    |
| -------------- | ------------------------ | ------------------------------ |
| folder_path    | string                   | Path to the folder to search.  |
| pattern        | string                   | Pattern to filter.             |
| filetype       | "file" \| "dir" \| "all" | File type to filter.           |
| recursive      | boolean                  | Whether to search recursively. |
| search_content | boolean                  | Whether to search content.     |
| search_type    | string                   | simple \| content              |

**Returns**

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

Stop a search task.

**Parameters**

| Name   | Type   | Description  |
| ------ | ------ | ------------ |
| taskid | string | The task ID. |

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## getSearchList

Get the list of search tasks.

**Parameters**

| Name       | Type                     | Description                  |
| ---------- | ------------------------ | ---------------------------- |
| taskid     | string                   | Task ID.                     |
| additional | string[]                 | Additional fields to return. |
| filetype   | "file" \| "dir" \| "all" | File type to filter.         |
| limit      | number                   | Limit the number of results. |
| offset     | number                   | Offset the results.          |

**Returns**

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

Delete search temporary database(s).

**Parameters**

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| taskid | string | Task ID.    |

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## createFolder

Create a folder.

**Parameters**

| Name         | Type                                                                  | Description                    |
| ------------ | --------------------------------------------------------------------- | ------------------------------ |
| folder_path  | string                                                                | Path to the folder.            |
| name         | string                                                                | Name of the folder.            |
| force_parent | boolean                                                               | Force to create parent folder. |
| additional   | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type"> | Additional information.        |

**Returns**

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

Get favorite list.

**Parameters**

| Name           | Type                                                                  | Description                  |
| -------------- | --------------------------------------------------------------------- | ---------------------------- |
| limit          | number                                                                | Limit the number of results. |
| offset         | number                                                                | Offset the results.          |
| sort_by        | string                                                                | Sort by.                     |
| sort_direction | "ASC" \| "DESC"                                                       | Sort direction.              |
| additional     | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type"> | Additional information.      |
| status_filter  | string                                                                | Sort by.                     |

**Returns**

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

Add a folder to user's favorites.

**Parameters**

| Name  | Type   | Description                |
| ----- | ------ | -------------------------- |
| path  | string | Path of the folder to add. |
| name  | string | Name of the folder.        |
| index | number | Index of the folder.       |

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## deleteFavorite

Delete a folder from user's favorites.

**Parameters**

| Name | Type   | Description                   |
| ---- | ------ | ----------------------------- |
| path | string | Path of the folder to delete. |

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## clearBrokenFavorite

Delete all broken statuses of favorites.

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## getThumbUrl

Get a thumbnail of a file
Note:

- 1. Supported image formats: jpg, jpeg, jpe, bmp, png, tif, tiff, gif, arw, srf, sr2, dcr, k25, kdc, cr2, crw, nef, mrw,
     ptx, pef, raf, 3fr, erf, mef, mos, orf, rw2, dng, x3f, heic, raw.
- 2. Supported video formats in an indexed folder: 3gp, 3g2, asf, dat, divx, dvr-ms, m2t, m2ts, m4v, mkv, mp4,
     mts, mov, qt, tp, trp, ts, vob, wmv, xvid, ac3, amr, rm, rmvb, ifo, mpeg, mpg, mpe, m1v, m2v, mpeg1, mpeg2,
     mpeg4, ogv, webm, flv, f4v, avi, swf, vdr, iso, hevc.
- 3. Video thumbnails exist only if video files are placed in the "photo" shared folder or users' home folders.

**Parameters**

| Name   | Type   | Description                                                                                                                          |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| path   | string | The path of the folder.                                                                                                              |
| size   | string | The size of the thumbnail.                                                                                                           |
| rotate | number | Optional. Return rotated thumbnail. Rotate Options: 0: Do not rotate. 1: Rotate 90°. 2: Rotate 180°. 3: Rotate 270°. 4: Rotate 360°. |

**Returns**

:::details

```json
{
  "success": true,
  "data": "http://192.168.1.100:5000/webapi/entry.cgi?api=SYNO.FileStation.Thumbnail&version=2&method=get&path=%2Fvideo%2F12&size=small&rotate=0"
}
```

:::

## startDirSizeCalc

Start to calculate size for one or more file/folder paths
**Parameters**
|Name|Type|Description|
|----|----|-----------|
|paths|string|File/folder paths to calculate size. Multiple paths can be separated by comma ","|

**Returns**

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

Stop to calculate size for one or more file/folder paths
**Parameters**

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| taskid | string | Task ID.    |

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## getDirSizeCalcStatus

Get the status of the size calculating task.
**Parameters**

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| taskid | string | Task ID.    |

**Returns**

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

Start calculating the MD5 value of a file.
**Parameters**

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| file_path | string | File path.  |

**Returns**

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

Stop calculating the MD5 value of a file.
**Parameters**

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| taskid | string | Task ID.    |

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## getMD5CalcStatus

Get the status of the MD5 calculating task.
**Parameters**

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| taskid | string | Task ID.    |

**Returns**

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

Check if a logged-in user has write permission to create new files/folders in a given folder.
**Parameters**

| Name        | Type    | Description                                         |
| ----------- | ------- | --------------------------------------------------- |
| path        | string  | Path of the folder.                                 |
| filename    | string  | Name of the file.                                   |
| overwrite   | boolean | If true, overwrite the file if it already exists.   |
| create_only | boolean | If true, create the file only if it does not exist. |

**Returns**

:::details

```json
{
  "success": true
}
```

:::

## rename

Rename a file or folder.
**Parameters**

| Name          | Type                                                                  | Description                                                                                                                                |
| ------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| path          | string                                                                | Path of the file or folder.                                                                                                                |
| name          | string                                                                | New name.                                                                                                                                  |
| additional    | Array<"real_path" \| "size" \| "owner" \| "time" \| "perm" \| "type"> | Additional information to return.                                                                                                          |
| search_taskid | string                                                                | Optional. A unique ID for the search task which is obtained from start method. It is used to update the renamed file in the search result. |

**Returns**

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

List all background tasks including copy, move, delete, compress and extract tasks.
**Parameters**

| Name             | Type     | Description                                                                                                                     |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| "limit"          | number   | Limit the number of tasks returned. Default is 100.                                                                             |
| "offset"         | number   | Offset the number of tasks returned. Default is 0.                                                                              |
| "sort_by"        | string   | Sort by. Default is "taskid".                                                                                                   |
| "sort_direction" | "ASC"    \| "DESC"                                                                                                                          | Sort direction. Default is "ASC". |
| "api_filter"     | string[] | API filter. Default is SYNO.FileStation.CopyMove,SYNO.FileStation.Delete,SYNO.FileStation.Extract or SYNO.FileStation.Compress. |

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
:::

## clearFinishedBackgroundTasks

Delete all finished background tasks.

**Parameters**
| Name | Type | Description |
| --- | --- | --- |
|taskid | string | Task ID |

**Returns**
None
