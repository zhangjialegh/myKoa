const Koa = require('./lib/application')
const app = new Koa()

app
  .use((ctx, next) => {
    console.log(next,'1')
    console.log(1)
    next()
    console.log(5)
  })
  .use((ctx, next) => {
    console.log(next,'2')
    console.log(2)
    next()
    console.log(4)
  })
  .use((ctx, next) => {
    console.log(next,'3')
    console.log(3)
    next()
    console.log(4)
  })

app.listen(3000)
