## Admin Router

```js
`/admin/users`:
1. GET => User[]
2. POST: Creates a new user
    params:
    fullName: String,
    email: String,
    returns: User

`/admin/users/admin`
PATCH - Updates admin users property for selected Ids
params: - userIds: [1,5,15] - admin: Boolean
returns: - amount: Number

`/admin/users/email`
POST - Sends an email to all or selected users
  params:
     - userIds?: Number[]
     - all: Boolean

`/admin/event`
GET - Gets events settings
  returns: Event
PATCH - Updates events settings
  params:
    - event: Event
  returns: Event


```
