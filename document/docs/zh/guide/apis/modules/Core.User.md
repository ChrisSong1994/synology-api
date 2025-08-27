# User APIs

## getUserList

获取用户列表

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| offset | number | 用户偏移数量 |
| limit | number | 用户限制数量 |
| sort_by | string | 排序字段 |
| sort_direction | string | 排序方向 |
| additional | Array< "description" \| "email" \| "expired" \| "cannot_chg_passwd" \| "passwd_never_expire" \| "password_last_change" \| "groups" \| "2fa_status"> | 附加字段 |

**返回值**

:::details

```json
{
  "data": {
    "offset": 0,
    "total": 2,
    "users": [
      {
        "description": "System default user",
        "email": "",
        "expired": "now",
        "name": "admin"
      },
      {
        "description": "Guest",
        "email": "",
        "expired": "now",
        "name": "guest"
      }
    ]
  },
  "success": true
}
```

:::

## getUserInfo

获取用户信息

**参数**
| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| name | string | 用户名 |
| additional | Array< "description" \| "email" \| "expired" \| "cannot_chg_passwd" \| "passwd_never_expire" \| "password_last_change"> | 附加字段 |

**返回值**

:::details

```json
{
  "data": {
    "user": [
      {
        "cannot_chg_passwd": false,
        "description": "",
        "email": "",
        "expired": "normal",
        "name": "admin",
        "passwd_never_expire": true,
        "password_last_change": 19789,
        "uid": 1027
      }
    ]
  },
  "success": true
}
```

:::
