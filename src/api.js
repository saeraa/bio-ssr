import express from "express";

const apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
	res.send(`movie with id of ${req.params.id}`);
});

export default apiRouter;
