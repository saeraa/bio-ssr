async function getRating() {
    const id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1);
    const res = await fetch(`http://localhost:5080/api/movies/${id}/rating`);
    const rating = await res.json();

    const movieRating = document.querySelector(".movie-rating");
    const movieRatingImg = document.querySelector(".movie-rating-img");
    
    if (rating.rating !== "API Error") {
        movieRating.hidden = "";
        movieRatingImg.hidden = "";
        
        movieRating.innerText = rating.rating;
    }
};

getRating();