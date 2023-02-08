import express from "express";
import { getReviewsForMovieWithId } from "./reviewList.js";

const apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
	res.send(`movie with id of ${req.params.id}`);
});

apiRouter.get("/movies/:id/reviews", async (req, res) => {
	const page = req.query.page;
	const id = req.params.id;
	const response = await getReviewsForMovieWithId(id, page);
	res.status(200).json(response);
});

export default apiRouter;
