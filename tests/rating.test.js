import getMovieRating from "../src/getMovieRating.js";
import { describe, expect, test } from "@jest/globals";


describe("getMovieRating()", () => {
	test("more then 5 reviews", async () => {
		const rating = await getMovieRating(0,0, mockReviews1, imdbRating);
		// Just to make sure that I am really testing an array with 5 or more reviews
        expect(mockReviews1.length).toBeGreaterThan(4);
		expect(rating).toBe(2);
	});

	test("less then 5 reviews", async () => {
		const rating = await getMovieRating(0,0, mockReviews2, imdbRating);
        // Just to make sure that I am really testing an array with less then 5 reviews
        expect(mockReviews2.length).toBeLessThan(5);
        expect(rating).toBe(imdbRating);
	});
});

const mockReviews1 = 
[
	{
		id: 37,
		attributes: {
			comment: "Detta är min första recension någonsin!",
			rating: 5,
			author: "MovieNoob",
			verified: false,
			createdAt: "2023-02-03T12:07:38.140Z",
			updatedAt: "2023-02-03T12:07:38.140Z",
		},
	},
	{
		id: 4,
		attributes: {
			comment: "Bra film, men för låga tonarter för sångarens röst!",
			rating: 3,
			author: "Alice",
			verified: true,
			createdAt: "2023-02-01T01:57:53.261Z",
			updatedAt: "2023-02-01T01:57:53.261Z",
		},
	},
	{
		id: 2,
		attributes: {
			comment: "I like this!",
			rating: 5,
			author: "Richard",
			verified: true,
			createdAt: "2023-01-31T08:33:15.683Z",
			updatedAt: "2023-01-31T08:33:31.874Z",
		},
	},
	{
		id: 19,
		attributes: {
			comment: "Jättebra film!",
			rating: 0,
			author: "Richard",
			verified: null,
			createdAt: "2023-02-02T12:24:12.887Z",
			updatedAt: "2023-02-02T12:24:12.887Z",
		},
	},
	{
		id: 1,
		attributes: {
			comment: "I don't like this!",
			rating: 0,
			author: "Richard",
			verified: false,
			createdAt: "2023-01-31T08:32:50.177Z",
			updatedAt: "2023-01-31T08:32:58.231Z",
		},
	},
	{
		id: 28,
		attributes: {
			comment: "Review utan namn",
			rating: 0,
			author: "Richard",
			verified: null,
			createdAt: "2023-02-02T13:25:22.837Z",
			updatedAt: "2023-02-02T13:25:22.837Z",
		},
	},
	{
		id: 45,
		attributes: {
			comment: "Toppen",
			rating: 2,
			author: "George Mandela",
			verified: true,
			createdAt: "2023-02-04T11:49:46.180Z",
			updatedAt: "2023-02-04T11:49:46.180Z",
		},
	},
	{
		id: 55,
		attributes: {
			comment: "Not appropriate for kids",
			rating: 1,
			author: "yve",
			verified: false,
			createdAt: "2023-02-06T06:53:53.235Z",
			updatedAt: "2023-02-06T06:53:53.235Z",
		},
	},
	{
		id: 34,
		attributes: {
			comment: "Hej en strikt recension!",
			rating: null,
			author: "RichardMedStrikt",
			verified: null,
			createdAt: "2023-02-02T13:47:12.336Z",
			updatedAt: "2023-02-02T13:47:12.336Z",
		},
	},
	{
		id: 3,
		attributes: {
			comment: "i love the movie",
			rating: 4,
			author: "yve",
			verified: true,
			createdAt: "2023-01-31T09:01:56.535Z",
			updatedAt: "2023-01-31T09:01:56.535Z",
		},
	}
];

const mockReviews2 = 
[
	{
		id: 41,
		attributes: {
			comment: "Crappy movie :>(",
			rating: 1,
			author: "John Does",
			verified: false,
			createdAt: "2023-02-03T15:12:06.408Z",
			updatedAt: "2023-02-03T15:12:06.408Z",
		},
	},
	{
		id: 27,
		attributes: {
			comment: "Test av cookies",
			rating: 0,
			author: "Richard",
			verified: null,
			createdAt: "2023-02-02T13:21:39.914Z",
			updatedAt: "2023-02-02T13:21:39.914Z",
		},
	},
	{
		id: 39,
		attributes: {
			comment: "This movie is awesome!",
			rating: 3,
			author: "John Doe",
			verified: false,
			createdAt: "2023-02-03T15:00:21.287Z",
			updatedAt: "2023-02-03T15:00:21.287Z",
		},
	}
];

const imdbRating = 5;
