# API Specification

## Return Authentication Token

Endpoint: `gateway/returnAuthenticationToken`

Request
```json
{
    "user": "<user id>"
}
```

Response
```json
{
    "authentication_token": "<token>"
}
```

## Confirm Set Password

Endpoint: `gateway/confirmSetPassword`

Request
```json
{
    "user": "<user id>",
    "password": "<string>"
}
```

Response
```json
{
    "password_set": "<boolean>",
    "password_hash": "<password>"    
}
```

## Confirm Invalidate Token

Endpoint: `gateway/confirmInvalidateToken`

Request
```json
{
    "user": "<user id>",
    "authentication_token": "<token>"
}
```

Response
```json
{
    "token_invalidated": "<boolean>",
    "invalidated_at": "<ISO8601 timestamp>"
}
```

## Confirm Account Creation

Endpoint: `gateway/confirmAccountCreation`

Request
```json
{
    "user": "<user id>"
}
```

Response
```json
{
    "account_created": "<boolean>",
    "created_at": "<ISO8601 timestamp>"
}
```

## Confirm Account Deletion

Endpoint: `gateway/confirmAccountDeletion`

Request
```json
{
    "user": "<user id>"
}
```

Response
```json
{
    "account_deleted": "<boolean>",
    "deleted_at": "<ISO8601 timestamp>"
}
```

## Confirm Account Update

Endpoint: `gateway/confirmAccountUpdate`

Request
```json
{
    "user": "<user id>"
}
```

Response
```json
{
    "account_updated": "<boolean>",
    "updated_at": "<ISO8601 timestamp>"
}
```

## Return Account Info

Endpoint: `gateway/returnAccountInfo`

Request
```json
{
    "user": "<user id>"
}
```

Response
```json
{
    "name": "<string>",
    "username": "<string>",
    "email": "<email>",
    "created_at": "<ISO8601 timestamp>",
    "updated_at": "<ISO8601 timestamp>"
}
```

## Confirm Image Upload

Endpoint: `gateway/confirmImageUpload`

Request
```json
{
    "image_id": "<image id>"
}
```

Response
```json
{
    "image_uploaded": "<boolean>",
    "uploaded_at": "<ISO8601 timestamp>"
}
```

## Confirm Image Deletion

Endpoint: `gateway/confirmImageDeletion`

Request
```json
{
    "image_id": "<image id>"
}
```

Response
```json
{
    "image_deleted": "<boolean>",
    "deleted_at": "<ISO8601 timestamp>"
}
```

## Return Post

Endpoint: `gateway/returnPost`

Request
```json
{
    "post_id": "<post id>"
}
```

Response
```json
{
    "created_by": "<user id>",
    "image": "<image id>",
    "likes": "<integer>",
    "created_at": "<ISO8601 timestamp>",
    "updated_at": "<ISO8601 timestamp>"
}
```

## Return Post For Tags

Endpoint: `gateway/returnPostForTags`

Request
```json
{
    "tags": "<[tag id]>"
}
```

Response
```json
{
    "post": "<post id>"
}
```

## Return Latest Posts

Endpoint: `gateway/returnLatestPosts`

Request
```json
{
}
```

Response
```json
{
    "posts": "<[post id]>"
}
```

## Confirm Tag Creation

Endpoint: `gateway/confirmTagCreation`

Request
```json
{
    "tag": "<tag id>"
}
```

Response
```json
{
    "tag_created": "<boolean>",
    "created_at": "<ISO8601 timestamp>"
}
```

## Confirm Tag Update

Endpoint: `gateway/confirmTagUpdate`

Request
```json
{
    "tag": "<tag id>"
}
```

Response
```json
{
    "tag_updated": "<boolean>",
    "updated_at": "<ISO8601 timestamp>"
}
```

## Confirm Tag Deletion

Endpoint: `gateway/confirmTagDeletion`

Request
```json
{
    "tag": "<tag id>"
}
```

Response
```json
{
    "tag_deleted": "<boolean>",
    "deleted_at": "<ISO8601 timestamp>"
}
```

## Return Tag

Endpoint: `gateway/returnTag`

Request
```json
{
    "tag": "<tag id>"
}
```

Response
```json
{
    "created_by": "<user id>",
    "content": "<content>",
    "created_at": "<ISO8601 timestamp>",
    "updated_at": "<ISO8601 timestamp>"
}
```

## Confirm User Script Creation

Endpoint: `gateway/confirmUserScriptCreation`

Request
```json
{
    "user_script": "<script id>"
}
```

Response
```json
{
    "script_created": "<boolean>",
    "created_at": "<ISO8601 timestamp>"
}
```

## Confirm User Script Update

Endpoint: `gateway/confirmUserScriptUpdate`

Request
```json
{
    "user_script": "<script id>"
}
```

Response
```json
{
    "script_updated": "<boolean>",
    "updated_at": "<ISO8601 timestamp>"
}
```

## Confirm User Script Deletion

Endpoint: `gateway/confirmUserScriptDeletion`

Request
```json
{
    "user_script": "<script id>"
}
```

Response
```json
{
    "script_deleted": "<boolean>",
    "deleted_at": "<ISO8601 timestamp>"
}
```

## Return User Script Status

Endpoint: `gateway/returnUserScriptStatus`

Request
```json
{
    "user_script": "<script id>"
}
```

Response
```json
{
    "script_status": "<status>",
}
```
