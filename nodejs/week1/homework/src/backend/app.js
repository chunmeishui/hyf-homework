
// All imports
const express = require("express");
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// All global variables

const app = express();
const CheapMeal = meals.filter(meal => meal.price < 70);
const largeMeal = meals.filter(meal => meal.maxNumberOfGuests > 4.5);
const randomNum = Math.round(Math.random() * meals.length);
const randomMeal = [meals[randomNum]];

// test local:3000
app.get("/", test);
app.get("/meals", mealsList);
app.get("/cheap-meals", CheapMealList);
app.get("/large-meals", largeMealList);
app.get("/meal", randomMealList);


async function test(request, response) {
  response.send(" test is succeed");

};

async function mealsList(request, response) {
  response.json(mapFilter(meals));
};

async function CheapMealList(request, response) {
  response.json(mapFilter(CheapMeal));
};

async function largeMealList(request, response) {
  response.json(mapFilter(largeMeal));
};

async function randomMealList(request, response) {
  response.json(mapFilter(randomMeal));
};

function mapFilter(a) {
  const mealWithReview = a.map(meal => {
    const reviewArray = reviews.filter(review => review.mealId === meal.id)
    return {
      ...meal,
      reviews: reviewArray
    }
  })
  return mealWithReview
};

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


// original way of doing it

// app.get("/", async (request, response) => {
//   response.send("asd");
// });


// meals with review
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

// app.get("/cheap-meals", async (request, response) => {
//   const CheapMealWithReview = CheapMeal.map((meal) => {
//     const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
//     return {
//       ...meal,
//       reviews: reviewMatchMeal
//     }
//   })
//   response.json(CheapMealWithReview)
// });

// large-meals

// app.get("/large-meals", async (request, response) => {
//   const largeMealWithReview = largeMeal.map((meal) => {
//     const reviewMatchMeal = reviews.filter(review => review.mealId === meal.id)
//     return {
//       ...meal,
//       reviews: reviewMatchMeal
//     }
//   })
//   response.json(largeMealWithReview)
// });

//random meal with review

// app.get("/meal", async (request, response) => {
//   const reviewRandom = reviews.filter((review) => review.mealId === randomMeal.id)
//   const randommealWithReview = {
//     ...randomMeal,
//     review: reviewRandom
//   }
  // response.send(randommealWithReview);
// })


