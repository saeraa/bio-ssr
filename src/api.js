import express from "express";
import { postReview } from "./addReviewServer.js";
import getMovieRating from "./getMovieRating.js";
import { loadMovie } from "./movies.js";
import { getReviewsForMovieWithId } from "./reviewList.js";

const apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
  res.send(`movie with id of ${req.params.id}`);
});

apiRouter.post(
  "/movies/:movieId/reviews",
 express.json(),
  async (req, res) => {
    postReview(req, res);
  }
);
apiRouter.get("/movies/:id/rating", async (req, res) => {
	const id = req.params.id; 
	const movie = await loadMovie(id)
	const rating = await getMovieRating(id, movie.data.attributes.imdbId);

	if (rating.Response == "False") {
		res.status(502).send({ rating: "API Error" });
	} else {
		res.status(200).send({ rating: rating.toFixed(1)});
	}

apiRouter.get("/movies/:id/reviews", async (req, res) => {
	const page = req.query.page;
	const id = req.params.id;
	const response = await getReviewsForMovieWithId(id, page);
	res.status(200).json(response);

});

export default apiRouter;
