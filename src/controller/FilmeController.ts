import { Request, Response } from "express"
import { FilmesDatabase } from "../database/filmesDatabase"

export class FilmesController {
    constructor() {
        
    }


public getFilmes = async (req: Request, res: Response) => {
    try {

        const getFilmes = req.query.q as string | undefined

        const filmesDatabase = new FilmesDatabase()
        const result = await filmesDatabase.findFilmes(q)

        // if (getFilmes === undefined) {
        //     const result = await FilmesDatabase
        //     res.status(200).send(result)
        // }


    } catch (error: any) {
        console.log(error)

        if (res.statusCode === 200) {
            res.status(500)
        }
        if (error instanceof Error) {
            res.send(error.message)
        }}}}