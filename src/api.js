import express from "express";
import loadScreenings from "./loadScreenings.js";
import {filterScreenings} from "./filterScreenings.js";

const apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
	res.send(`movie with id of ${req.params.id}`);
});

apiRouter.get("/screenings", async (req,res)=> {
	let data;
	let filteredScreenings;
	try {
		data = await loadScreenings();
		filteredScreenings = filterScreenings(data);
		res.json(filteredScreenings);
	} catch(error) {
		res.status(error.response.status).json(error);
	}
});

export default apiRouter;
