import express from "express";
import bodyParser from "body-parser";
import { postReview } from "./addReviewServer.js";

const apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
  res.send(`movie with id of ${req.params.id}`);
});

apiRouter.post(
  "/movies/:movieId/reviews",
  bodyParser.json(),
  async (req, res) => {
    postReview(req, res);
  }
);

export default apiRouter;
