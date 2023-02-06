import express from "express";
import getMovieRating from "./getMovieRating.js";
import { loadMovie } from "./movies.js";

const apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
	res.send(`movie with id of ${req.params.id}`);
});


apiRouter.get("/movies/:id/rating", async (req, res) => {
	const id = req.params.id; 
	const movie = await loadMovie(id)
	const rating = await getMovieRating(id, movie.data.attributes.imdbId);

	if (rating.Response == "False") {
		res.status(502).send({ rating: "API Error" });
	} else {
		res.status(200).send({ rating: rating.toFixed(1)});
	}
});

export default apiRouter;
