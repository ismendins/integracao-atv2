
# NodeUsers - ATV2 de Integração 2025.1

Simple API integrated with a Supabase database for CRUD of users.
## Deployment

To deploy this project run first make sure `Node` is installed, then

```bash
$ git clone https://github.com/ismendins/integracao-atv2.git

$ cd integracao-atv2/nodeUsers
```
and

```
node index.js
```

or if you have nodemon installed, try

```
nodemon index.js
```

## Routes

Routes to test the API:

GET Users: `localhost:3000/api/user/users`

GET User: `localhost:3000/api/user/users/:id`

POST User: `localhost:3000/api/user/users`

DELETE User: `localhost:3000/api/user/users/:id`