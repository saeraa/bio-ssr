import express from "express";
import axios from "axios";

const apiRouter = express.Router();

apiRouter.get("/movies/:id", (req, res) => {
	res.send(`movie with id of ${req.params.id}`);
});

apiRouter.get("/screenings", async (req,res)=> {
	let data;
	try {
		data = await axios.get("https://plankton-app-xhkom.ondigitalocean.app/api/screenings");
		data = data.data.data;
		data.forEach(element => {
			console.log(element.attributes)
		});
		console.log(Date.now())
	} catch(error) {
		console.log(error)
	}
	res.send("Hey")
});

export default apiRouter;
