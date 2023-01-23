export async function getMovies() {
	const res = await fetch("/database.json");
	const data = await res.json();

	return data;
}

export async function getShowTimes() {
	const res = await fetch("/showtimes.json");
	const data = await res.json();

	return data;
}
