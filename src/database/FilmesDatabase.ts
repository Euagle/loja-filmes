import { TFilmes } from "../types";
import { BaseDatabase } from "./BaseDataBase";


export class FilmesDatabase extends BaseDatabase{
    public static TABLE_Filmes = "filmes"

    public async findFilmes (q: string | undefined){
        let filmesDB
        if (q){
            const result: TFilmes[] = await BaseDatabase
             .connection(FilmesDatabase.TABLE_Filmes)
             .where ("name", "LIKE", `%${q}%`)
             filmesDB = result
        }else{
            const result : TFilmes[] = await BaseDatabase
            .connection(FilmesDatabase.TABLE_Filmes)
            filmesDB = result

        }
        return filmesDB
    }
    
}