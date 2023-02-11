const addReviewButton = document.querySelector(".add-review-button");
const addReviewContent = document.querySelector(".add-review-content");

addReviewButton.addEventListener("click", () => {
  addReviewButton.classList.toggle("clicked");
  addReviewContent.classList.toggle("show");
});

const submitButton = document.querySelector(".submit-review");

submitButton.addEventListener("click", postReviewHandler);

async function postReviewHandler() {
  const movieId = window.location.href.split("/").pop();
  const author = document.querySelector("#name").value;
  const rating = Math.round(document.querySelector("#rating").value);
  const comment = document.querySelector("#comment").value;
  const template = addReviewContent.innerHTML;
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
  const result = await response.json();

  addReviewContent.innerHTML = "";
  const reviewDone = document.createElement("h2");
  reviewDone.textContent = result.data.message;
  reviewDone.style.textAlign = "center";
  addReviewContent.appendChild(reviewDone);

  if (result.data.validated == true) {
    setTimeout(() => {
      addReviewContent.classList.toggle("hide");
      addReviewButton.classList.toggle("hide");
    }, 3000);
  } else {
    setTimeout(() => {
      addReviewContent.innerHTML = template;
      document
        .querySelector(".add-review-content")
        .childNodes[3].addEventListener("click", postReviewHandler);
    }, 3000);
  }
}
