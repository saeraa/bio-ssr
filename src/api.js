import express from "express";
import loadScreenings from "./loadScreenings.js";
import filterScreenings from "./filterScreenings.js";

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
		console.log(filteredScreenings[0].attributes.movie)
		res.json(filteredScreenings);
	} catch(error) {
		console.log(error)
	}
});

export default apiRouter;
