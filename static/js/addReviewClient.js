const addReviewButton = document.querySelector(".add-review-button");
let addReviewContent = document.querySelector(".add-review-content");

addReviewButton.addEventListener("click", () => {
  addReviewButton.classList.toggle("clicked");
  addReviewContent.classList.toggle("show");
});

document
  .querySelector(".submit-review")
  .addEventListener("click", async (ev) => {
    ev.preventDefault();
    const movieId = window.location.href.split("/").pop();
    const author = document.querySelector("#name").value;
    const rating = document.querySelector("#rating").value;
    const comment = document.querySelector("#comment").value;
    addReviewContent.innerHTML = "";
    const reviewDone = document.createElement("h2");
    reviewDone.textContent = "Thank you for the review, " + author + "!";
    reviewDone.style.textAlign = "center";
    addReviewContent.appendChild(reviewDone);
    setTimeout(() => {
      addReviewContent.classList.toggle("hide");
      addReviewButton.classList.toggle("hide");
    }, 3000);
    // i am going to use this variable in the second part of the assignment.
    const response = await fetch(
      new Request("/api/movies/" + movieId + "/reviews", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            comment: comment,
            rating: rating,
            author: author,
            verified: false,
            movie: movieId,
            createdAt: new Date(),
            updatedAt: new Date(),
            createdBy: author,
            updatedBy: author,
          },
        }),
      })
    );
  });
