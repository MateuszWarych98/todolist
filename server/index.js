const path = require('path')
const Koa = require('koa')
const parse = require('koa-bodyparser')
const serve = require('koa-static')

const app = new Koa()
const port = process.env.PORT || 3000

require('./store').init()
app.use(parse())

app.use(serve(path.resolve(__dirname, '..', 'client')))

const userRoutes = require('./routes/users')
app.use(userRoutes.routes())

const taskRoutes = require('./routes/tasks')
app.use(taskRoutes.routes())
app.listen(port)            

console.log('App is listening at http://127.0.0.1:3000')