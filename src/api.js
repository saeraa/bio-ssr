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
			const day = element.attributes.start_time.split("T")[0];
			const currentDate = new Date(day)
			const startPoint =  new Date(Date.now() + 86400000);
			startPoint.setHours(0)
			startPoint.setMinutes(0)
			startPoint.setSeconds(0)
			startPoint.setMilliseconds(0)
			
			const endPoint = new Date(Date.now() + 518400000);
			endPoint.setHours(0)
			endPoint.setMinutes(0)
			endPoint.setSeconds(0)
			endPoint.setMilliseconds(0)
		
			if(currentDate.getTime() > startPoint.getTime() && currentDate.getTime() < endPoint.getTime()) {
				console.log(element.attributes.start_time)
			}
		
		});
	} catch(error) {
		console.log(error)
	}
	res.send("Hey")
});

export default apiRouter;
