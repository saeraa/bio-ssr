import express from "express";

apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
  res.send(movie with id of req.param.id)
})
