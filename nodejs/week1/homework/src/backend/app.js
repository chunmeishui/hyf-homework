const express = require("express");
const app = express();
module.exports = app;
// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");
const mealsNum = meals.map((meal) => meal.id);
const reviewMealId = reviews.map((review) => review.mealId);
// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("asd");
});
// meals with review
app.get("/meals", async (request, response) => {
  const mealWithReview = meals.map(meal => {
    const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
    return {
      ...meal,
      reviews: reviewMatchMeal
    }
  })
  response.send(mealWithReview);
});
// cheap-meals
app.get("/cheap-meals", async (request, response) => {
  const CheapMeal = meals.filter(meal => meal.price < 70)
  const CheapMealWithReview = CheapMeal.map((meal) => {
    const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
    return {
      ...meal,
      reviews: reviewMatchMeal
    }
  })
  response.send(CheapMealWithReview)
});
// large-meals
app.get("/large-meals", async (request, response) => {
  const largeMeal = meals.filter(meal => meal.maxNumberOfGuests >4)
  const largeMealWithReview = largeMeal.map((meal) => {
    const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
    return {
      ...meal,
      reviews: reviewMatchMeal
    }
  })
  response.send(largeMealWithReview)
});
app.get("/meal", async (request, response) => {
  const randomNum = Math.round(Math.random() * meals.length);
  const randomMeal = meals[randomNum];
  const reviewRandom = reviews.filter((review) => review.mealId === randomMeal.id)
  const randommealObj = {
    ...randomMeal,
    review: reviewRandom
  }
  response.json(randommealObj);
})

// reservationsapp
app.get("/reservations", async (request, response) => {
  response.json(reservations);
});
// random reservation
app.get("/reservation", async (request, response) => {
  const random = Math.round(Math.random() * reservations.length);
  const reservationRandom = reservations[random]
  response.send(reservationRandom);
});

