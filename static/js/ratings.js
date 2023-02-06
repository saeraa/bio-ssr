async function getRating() {
    const id = window.location.href.slice(window.location.href.lastIndexOf("/") + 1);
    const res = await fetch(`/api/movies/${id}/rating`);
    const rating = await res.json();
    
    if (rating.rating !== "API Error") {

        for (let i=0; i<5; i++) {

            let ul = document.querySelector(".movie-rating-hats");
            let li = document.createElement("li");
            
            if (i < rating.rating) {
            
                if ( i == Math.floor(rating.rating)) {
            
                    li.classList.add("hat-halffill");
            
                } else {
            
                    li.classList.add("hat-fill")
                }
            } else {

                li.classList.add("hat-nofill")
            }

            ul.appendChild(li);
        }
    }
};

getRating();