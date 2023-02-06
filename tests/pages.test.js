import { loadMovie } from "../src/movies";
import request from "supertest";
import app from "../src/app.js";

test("hompage shows list of movies", async () => {
	const response = await request(app)
		.get("/")
		.expect(200)
		.expect("Content-Type", "text/html; charset=utf-8");

	expect(response.text.includes("Shawshank")).toBeTruthy();
});

test("correct title", async () => {
	const number = 2;
	const response = await request(app)
		.get("/movie/" + number)
		.expect("Content-Type", "text/html; charset=utf-8")
		.expect(200);

	const apiResponse = await loadMovie(number);

	expect(response.text).toMatch(apiResponse.data.attributes.title);
});

test("Encanto page returns Encanto information", async () => {
	const response = await request(app)
		.get("/movie/2")
		.expect("Content-Type", "text/html; charset=utf-8")
		.expect(200);

	expect(response.text.includes("Encanto")).toBeTruthy();
	expect(response.text.includes("Shawshank")).toBeFalsy();
});

test("404 when requesting wrong page", async () => {
	const response = await request(app)
		.get("/movie/22353735724512331235465")
		.expect("Content-Type", "text/html; charset=utf-8")
		.expect(404);

	expect(response.text.includes("Shawshank")).toBeFalsy();
});
