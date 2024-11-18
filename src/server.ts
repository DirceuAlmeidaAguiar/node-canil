import express from 'express'
import dontenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

dontenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../src/public')))

// Aqui ficarão as rotas

server.use(mainRoutes)

server.use((req, resp)=>{
    resp.send('Página não foi encontrada. Tente Novamente...')
})

server.listen(process.env.PORT)