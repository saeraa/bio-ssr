import fetch from "node-fetch";

const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function postReview(req, res) {
  const review = req.body.data;
  const reviewToValidate = validateReview(review);
  if ((reviewToValidate.validated == true)) {
    const method = {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    await fetch(API_BASE, method);
    res.status(201).send({ data: reviewToValidate });
  } else {
    res.status(422).send({ data: reviewToValidate });
  }
}

function validateReview(review) {
  if (checkAuthor(review)) {
    if (checkRating(review)) {
      return {
        validated: true,
        message: "Thank you for the review, " + review.author + "!",
      };
    } else {
      return {
        validated: false,
        message: "The rating needs to be between 0-5!",
      };
    }
  } else if (!checkRating(review)) {
    return {
      validated: false,
      message: "Please write a valid name and rating!",
    };
  } else {
    return { validated: false, message: "Please write a valid name!" };
  }
}

function checkAuthor(review) {
  const author = review.author;
  const regex = /[^a-zA-Z -]/;
  if (author.match(regex)||author.length == 0) {
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
