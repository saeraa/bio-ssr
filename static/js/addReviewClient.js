const addReviewButton = document.querySelector(".add-review-button");
const addReviewContent = document.querySelector(".add-review-content");
const loggedOutEl = document.querySelector(".add-review-logged-out");
const loggedInEl = document.querySelector(".add-review-logged-in");
const ratingInput = document.querySelectorAll(".post-review-rating > input");
const ratingHats = document.querySelectorAll(".post-review-rating > label");

ratingInput.forEach((input) => {
  input.addEventListener("click", () => {
    const filledHats = document.querySelectorAll(".hat-filled");
    const index = 5 - input.value;
    if (input.value > filledHats.length) {
      for (let i = index; i <= 4; i++) {
        if (ratingHats[i].className != "hat-filled") {
          ratingHats[i].classList.toggle("hat-filled");
        }
      }
    } else if (input.value < filledHats.length) {
      for (let i = index - 1; i >= 0; i--) {
        if (ratingHats[i].className == "hat-filled") {
          ratingHats[i].classList.remove("hat-filled");
        }
      }
    } else {
      for (let i = index; i <= 4; i++) {
        ratingHats[i].classList.toggle("hat-filled");
      }
    }
  });
});

function whatToToggle(filledHats, pressedHats) {}

addReviewButton.addEventListener("click", () => {
  addReviewButton.classList.toggle("clicked");
  addReviewContent.classList.toggle("show");
});

let loggedIn = false;
let sendReviewToken;

document.querySelector("#login").addEventListener("click", async () => {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  const bufferedInput = btoa(username + ":" + password);
  try {
    const response = await fetch(
      new Request("/api/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authentication: "Basic " + bufferedInput,
        },
      })
    );
    if (response.status === 401) {
      alert("Fel lösenord eller användarnamn");
      throw new Error("Invalid username or password");
    }
    loggedIn = true;
    loggedInEl.classList.add("show");
    loggedInEl.classList.remove("hide");
    loggedOutEl.classList.add("hide");

    const data = await response.json();
    sendReviewToken = data.token;
  } catch (e) {
    console.log(e.message);
  }
});

function triggerNotLoggedInMessage() {
  if (!loggedIn) {
    const notLogged = document.querySelector(".add-review-not-logged-warning");
    notLogged.classList.remove("hide");
    notLogged.classList.add("show");

    setTimeout(() => {
      notLogged.classList.remove("show");
      notLogged.classList.add("hide");
    }, 1500);
    return false;
  } else {
    return true;
  }
}

document
  .querySelector(".submit-review")
  .addEventListener("click", async (ev) => {
    ev.preventDefault();

    const isLoggedIn = triggerNotLoggedInMessage();
    if (!isLoggedIn) {
      return;
    }

    const movieId = window.location.href.split("/").pop();
    const author = document.querySelector("#name").value;
    const rating = document.querySelectorAll(".hat-filled").length;
    const comment = document.querySelector("#comment").value;

    // i am going to use this variable in the second part of the assignment.
    const response = await fetch(
      new Request("/api/movies/" + movieId + "/reviews", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authentication: "Bearer " + sendReviewToken,
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

    if (response.status === 401) {
      loggedIn = false;
      loggedInEl.classList.add("hide");
      loggedInEl.classList.remove("show");
      loggedOutEl.classList.add("show");
      loggedOutEl.classList.remove("hide");
      triggerNotLoggedInMessage();
      return;
    }

    addReviewContent.innerHTML = "";
    const reviewDone = document.createElement("h2");
    reviewDone.textContent = "Tack för din recension " + author + "!";
    reviewDone.style.textAlign = "center";
    addReviewContent.appendChild(reviewDone);
    setTimeout(() => {
      addReviewContent.classList.toggle("hide");
      addReviewButton.classList.toggle("hide");
    }, 3000);
  });
