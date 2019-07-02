import * as express from 'express'
import * as promClient from 'prom-client'
import * as nexChrome from './chrome'

const register = promClient.register
const interval: number = 10000 // msec
const server = express()
const targetUrl: string = 'http://exsample.com'

setInterval(() => {
  nexChrome.Run(targetUrl)
}, interval)

server.get('/metrics', (req, res) => {
  res.set('Content-Type', register.contentType)
  res.end(register.metrics())
})

console.log('Server listening to 3000, metrics exposed on /metrics endpoint')
server.listen(3000)
