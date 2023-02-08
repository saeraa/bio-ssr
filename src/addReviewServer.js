const API_BASE = "https://plankton-app-xhkom.ondigitalocean.app/api/reviews";

export async function postReview(req, res) {
  const method = {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  // i am going to use this variable in the second part of the assignment.
  const response = await fetch(API_BASE, method);
  res.send().status(200);
}
