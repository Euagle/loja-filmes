import { FilmesDatabase } from "../database/FilmesDatabase"
import { Filmes } from "../models/Filmes"



export class FilmesBusiness {
    public async getFilmes(input :any){
        const { q } = input

        const filmesDatabase = new FilmesDatabase()
        const filmesdb = await filmesDatabase.findFilmes(q)

        const filmess: Filmes[] = filmesdb.map((filme) => new Filmes(

            filme.id,
            filme.name,
            filme.category
        ))
 
           
        
        return filmess
        }
    }
