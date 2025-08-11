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

| Name       | Type     | Description                  |
| ---------- | -------- | ---------------------------- |
| taskid     | string   | Task ID.                     |
| additional | string[] | Additional fields to return. |
| filetype   | "file"   \| "dir" \| "all" | File type to filter. |
| limit      | number   | Limit the number of results. |
| offset     | number   | Offset the results.          |

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

| Name | Type | Description |
| --- | --- | --- |
| taskid | string | Task ID. |

**Returns**

:::details

```json
{
  "success": true
}
```
:::
