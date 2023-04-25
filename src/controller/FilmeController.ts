import { Request, Response } from "express"
import { TFilmes } from "../types"
import { Filmes } from "../models/Filmes"
import { FilmesBusiness } from "../business/FilmesBusiness"

export class FilmesController {
    constructor() {
        
    }


public getFilmes = async (req: Request, res: Response) => {
    try {

        const input= { 
            q : req.query.q 

        }

        const filmesBusiness = new FilmesBusiness()
        const result = await filmesBusiness.getFilmes(input)

        
        // const filmes : TFilmes[] = result.map((resultFilmes) => new Filmes(
        //     resultFilmes.id,
        //     resultFilmes.name,
        //     resultFilmes.category,
        // ))   
        res.status(200).send(result) 
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