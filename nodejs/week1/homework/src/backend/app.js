
// All imports
const express = require("express");
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// All global variables

const app = express();
const CheapMeal = meals.filter(meal => meal.price < 70);
const largeMeal = meals.filter(meal => meal.maxNumberOfGuests > 4);

// test local:3000

// app.get("/", async (request, response) => {
//   response.send("asd");
// });
app.get("/", test);
async function test(request, response) {
  response.send(" test is succeed");

}

// meals with review
app.get("/meals", mealsList);

async function mealsList(request, response) {
  mapFilter(meals, reviews)
};
function mapFilter(a, b) {
  const mealWithReview = a.map(meal => {
    const mealWithReview = b.filter(review => review.mealId === meal.id)
    return {
      ...meal,
      reviews: mealWithReview
    }
  })
  response.json(mealWithReview);
}
//method 2

// app.get("/meals", async (request, response) => {
//   const mealWithReview = meals.map(meal => {
//     const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
//     return {
//       ...meal,
//       reviews: reviewMatchMeal
//     }
//   })
//   response.json(mealWithReview);
// });

// cheap-meals

app.get("/cheap-meals", async (request, response) => {

  const CheapMealWithReview = CheapMeal.map((meal) => {
    const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
    return {
      ...meal,
      reviews: reviewMatchMeal
    }
  })
  response.json(CheapMealWithReview)
});

// large-meals

app.get("/large-meals", async (request, response) => {
  const largeMealWithReview = largeMeal.map((meal) => {
    const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
    return {
      ...meal,
      reviews: reviewMatchMeal
    }
  })
  response.json(largeMealWithReview)
});

app.get("/meal", async (request, response) => {
  const randomNum = Math.round(Math.random() * meals.length);
  const randomMeal = meals[randomNum];
  const reviewRandom = reviews.filter((review) => review.mealId === randomMeal.id)
  const randommealWithReview = {
    ...randomMeal,
    review: reviewRandom
  }
  response.json(randommealWithReview);
})

// reservationsapp

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

// random reservation

app.get("/reservation", async (request, response) => {
  const random = Math.round(Math.random() * reservations.length);
  const reservationRandom = reservations[random]
  response.json(reservationRandom);
});


module.exports = app;
