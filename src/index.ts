import express, {Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { db } from './baseDatabase/knex'



dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT)}`)
})


app.get('/filmes', async (req: Request, res: Response) => {
    try {

        const getFilmes = req.query.q as string | undefined

        if (getFilmes === undefined) {
            const result = await db.raw(`SELECT * FROM filmes`)
            res.status(200).send(result)
        }


    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }
        if (error instanceof Error) {
            res.send(error.message)
        }}})