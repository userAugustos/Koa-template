import dotenv from 'dotenv'
dotenv.config()
import Koa from 'koa'
import { koaBody } from 'koa-body'
import Router from 'koa-router'
import json from 'koa-json'
import logger from 'koa-logger'

const app = new Koa();
const router = new Router();
const key = process.env.AI_KEY

app.use(koaBody())
app.use(json())
app.use(logger())

app.use(router.routes()).use(router.allowedMethods())

router.post("/chat", async (ctx, next) => {
	ctx.body = { msg: ctx.request.body }
})

app.listen(3000, () => {
    console.log("Server Started")
})
