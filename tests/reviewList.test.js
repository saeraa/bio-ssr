import { getReviewsForMovieWithId } from "../src/reviewList.js";
import { describe, expect, test } from "@jest/globals";

const exampleResponse = {
	data: {
		data: [
			{
				id: 1,
				attributes: {
					comment: "I don't like this!",
					rating: 0,
					author: "Richard",
					verified: false,
					createdAt: "2023-01-31T08:32:50.177Z",
					updatedAt: "2023-01-31T08:32:58.231Z"
				}
			},
			{
				id: 2,
				attributes: {
					comment: "I like this!",
					rating: 5,
					author: "Richard",
					verified: true,
					createdAt: "2023-01-31T08:33:15.683Z",
					updatedAt: "2023-01-31T08:33:31.874Z"
				}
			},
			{
				id: 3,
				attributes: {
					comment: "i love the movie",
					rating: 4,
					author: "yve",
					verified: true,
					createdAt: "2023-01-31T09:01:56.535Z",
					updatedAt: "2023-01-31T09:01:56.535Z"
				}
			},
			{
				id: 4,
				attributes: {
					comment: "Bra film, men för låga tonarter för sångarens röst!",
					rating: 3,
					author: "Alice",
					verified: true,
					createdAt: "2023-02-01T01:57:53.261Z",
					updatedAt: "2023-02-01T01:57:53.261Z"
				}
			},
			{
				id: 1,
				attributes: {
					comment: "I don't like this!",
					rating: 0,
					author: "Richard",
					verified: false,
					createdAt: "2023-01-31T08:32:50.177Z",
					updatedAt: "2023-01-31T08:32:58.231Z"
				}
			},
			{
				id: 1,
				attributes: {
					comment: "I don't like this!",
					rating: 0,
					author: "Richard",
					verified: false,
					createdAt: "2023-01-31T08:32:50.177Z",
					updatedAt: "2023-01-31T08:32:58.231Z"
				}
			},
			{
				id: 1,
				attributes: {
					comment: "I don't like this!",
					rating: 0,
					author: "Richard",
					verified: false,
					createdAt: "2023-01-31T08:32:50.177Z",
					updatedAt: "2023-01-31T08:32:58.231Z"
				}
			}
		],
		meta: {
			pagination: {
				page: 1,
				pageSize: 5,
				pageCount: 1,
				total: 4
			}
		}
	}
};

const mockApiAdapter = async () => {
	return exampleResponse;
};

const exampleMovie = 2;

describe("Tests of the Review List Pagination function", () => {
	test("max five results", async () => {
		const result = await getReviewsForMovieWithId(
			exampleMovie,
			1,
			mockApiAdapter
		);

		expect(result.reviews.length).toBeLessThanOrEqual(5);
	});
});
