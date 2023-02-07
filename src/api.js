import express from "express";
import { postReview } from "./addReviewServer.js";

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

export default apiRouter;
