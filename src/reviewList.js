import axios from "axios";

const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

const apiAdapter = async (movieId, pageNumber) => {
	try {
		const response = await axios.request({
			method: "GET",
			url: `${API_BASE}?filters%5Bmovie%5D=${movieId}&pagination%5Bpage%5D=${pageNumber}&pagination%5BpageSize%5D=5`
		});
		return response;
	} catch (error) {
		return error;
	}
};

const getReviewsForMovieWithId = async (
	movieId,
	pageNumber,
	callApiFunction = apiAdapter
) => {
	try {
		const response = await callApiFunction(movieId, pageNumber);
		// if, for some reason, the pagination isn't working from the API, slice the review results to 5 ??? probably pointless, who knows
		const reviewList =
			response.data.data.length > 5
				? response.data.data.slice(0, 5)
				: response.data.data;
		const pages = response.data.meta.pagination;

		const result = {
			reviews: reviewList,
			pages: pages
		};
		return result;
	} catch (error) {
		return error.message;
	}
};

export { getReviewsForMovieWithId };
