import axios from "axios";

const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function loadMovies() {
	const res = await axios.request({
		url: API_BASE + "/movies",
		method: "GET"
	});
	return res.data;
}

export async function loadMovie(id) {
	console.log(id);
	try {
		const res = await axios.request({
			url: API_BASE + "/movies/" + id,
			method: "GET"
		});
		return res.data;
	} catch (err) {
		return { err };
	}
	console.log(res.response.status);
	if (res.data.error.status === 404 || res.data.error.status === 500) {
		return { statusCode: res.data.error.status };
	}

	// return { boo: "HI" };
}
