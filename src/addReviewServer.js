import fetch from "node-fetch";

const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function postReview(req, res) {
  const review = req.body.data;
  const reviewToValidate = validateReview(review);
  if (reviewToValidate.validated == true) {
    const method = {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    await fetch(API_BASE, method);
    res.status(reviewToValidate.status).send({ data: reviewToValidate });
  } else {
    res.status(reviewToValidate.status).send({ data: reviewToValidate });
  }
}

export function validateReview(review) {
  if (checkAuthor(review)) {
    if (checkRating(review)) {
      return {
        validated: true,
        message: "Tack för din recension, " + review.author + "!",
        status: 201,
      };
    } else {
      return {
        validated: false,
        message: "Betyget behöver vara mellan 0-5!",
        status: 422,
      };
    }
  } else if (!checkRating(review)) {
    return {
      validated: false,
      message: "Skriv in korrekt namn och betyg!",
      status: 422,
    };
  } else {
    return {
      validated: false,
      message: "Skriv in ett korrekt namn!",
      status: 422,
    };
  }
}

function checkAuthor(review) {
  const author = review.author;
  const regex = /[^a-zA-Z -]/;
  if (author.match(regex) || author.length == 0) {
    return false;
  } else {
    return true;
  }
}

function checkRating(review) {
  const rating = review.rating;
  if (0 <= rating && rating <= 5 && rating.length > 0) {
    return true;
  } else {
    return false;
  }
}
