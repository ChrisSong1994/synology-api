# Core User APIs

## getUserList

Get user list

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| offset | number | Offset number of users |
| limit | number | Limit number of users |
| sort_by | string | Sort by |
| sort_direction | string | Sort direction |
| additional | Array< "description" \| "email" \| "expired" \| "cannot_chg_passwd" \| "passwd_never_expire" \| "password_last_change" \| "groups" \| "2fa_status"> | Additional fields |

**Returns**

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

Get user info

**Parameters**
| Name | Type | Description |
| ---- | ---- | ----------- |
| name | string | User name |
| additional | Array< "description" \| "email" \| "expired" \| "cannot_chg_passwd" \| "passwd_never_expire" \| "password_last_change"> | Additional fields |

**Returns**

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
