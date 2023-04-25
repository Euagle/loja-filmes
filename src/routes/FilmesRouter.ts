import express from "express"

import { FilmesController } from "../controller/FilmeController"

export const FilmesRouter = express.Router();
const filmesController = new FilmesController()

FilmesRouter.get("/", filmesController.getFilmes)