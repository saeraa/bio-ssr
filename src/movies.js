import axios from "axios";

const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function loadMovies() {
  const res = await axios.request({
    url: API_BASE + "/movies",
    method: "GET",
  });
  return res.data;
}

export async function loadMovie(id) {
  try {
    const res = await axios.request({
      url: API_BASE + "/movies/" + id,
      method: "GET",
    });
    return res.data;
  } catch (err) {
    return { err };
  }
}

export async function loadReviewsForMovie(id) {
  const res = await axios.request({
    url: API_BASE + "/reviews?filters[movie]=" + id,
    method: "GET",
  });

  return res.data.data;
}

export async function loadMovieScreenings(movieId) {
  const res = await axios.request({
    url: API_BASE + `/screenings?filters[movie]=${movieId}`,
    method: "GET",
    responseType: "json",
  });
  const data = res.data;
  return data;
}
