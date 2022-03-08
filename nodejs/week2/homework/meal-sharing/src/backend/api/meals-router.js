//import
const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");

router.get("/", async (req, res) => {

  let dataOfMeal = meals;

  if ("date" in req.query ) {
    try {
      dataOfMeal = dataOfMeal.filter((meal) =>
    new Date(meal.createdAt).getTime() > new Date(req.query.date).getTime());
    if (dataOfMeal.length > 0) {
      res.json(dataOfMeal)
    }else{
      res.status(404);
      res.send("there is no such meal date,Pls check");
      
    }
    } catch (error) {
      throw error;
    }
  }

  if ("maxPrice" in req.query) {

    dataOfMeal = meals.filter(meal => Number(meal.price) <= Number(req.query.maxPrice));
    
    if (dataOfMeal.length > 0) {

            res.json(dataOfMeal);

          } else {

            res.status(404);
            res.send("there is no such meal id,Pls check");
            
          }
  }

  if ("title" in req.query) {

    dataOfMeal = meals.filter(meal => (meal.title).toLowerCase().includes((req.query.title).toLowerCase()));

    if (dataOfMeal.length > 0) {
            res.json(dataOfMeal);
          } else {
            res.status(404).send("Sorry,No such meals in the menu");
          }
  }
  
  if ("limit" in req.query) {

    const mealsNew = meals.map(meal => meal);
    const limitNo = Number(req.query.limit);
    dataOfMeal = mealsNew.slice(0, limitNo);

    if (limitNo <= mealsNew.length && limitNo > 0) {
            res.json(dataOfMeal);
          } else {
            res.status(404).send(`Sorry,there is only ${mealsNew.length} meals left.`);
          }
  }
 else{
   res.json(dataOfMeal);// no one is match just show the whole data
  }

});

module.exports = router;


//meals
// router.get("/", async (req, res) => {
//   try {
//     console.log(meals);
//     console.log("in /api/meals");
//     res.json(meals)
//   } catch (error) {
//     throw (error);
//   }
// });

// //maxPrice

// router.get("/", async (req, res) => {
//   try {
//     const cheapMeals = meals.filter(meal => Number(meal.price) <= Number(req.query.maxPrice));
//     if (cheapMeals) {
//       res.json(cheapMeals);
//     } else {
//       res.json("there is no such meal id,Pls check");
//       res.status(404);
//     }

//   } catch (error) {
//     throw (error);
//   }
// });

// // //title

// router.get("/title", async (req, res) => {
//   try {
//     const mealTitle = meals.filter(meal => meal.title.includes(req.query.title));
//     if (mealTitle) {
//       res.json(mealTitle);
//     } else {
//       res.status(404).json("Sorry,No such meals in the menu");
//     }
//   } catch (error) {
//     throw (error);
//   }
// });



// // limit
// router.get("/limit", async (req, res) => {
//   try {
//     const mealsNew = meals.map(meal => meal);
//     const limitNo = Number(req.query.limit);
//     if (limitNo <= mealsNew.length) {
//       const mealsLimited = mealsNew.slice(0, limitNo)
//       res.json(mealsLimited);
//     } else {
//       res.status(404).json(`Sorry,there is only ${mealsNew.length} meals left.`);
//     }

//   } catch (error) {
//     throw (error);
//   }
// });

// meal by id

// router.get("/:id", (req, res) => {
//   try {
//     const searchId = req.params.id;
//     const specificMeal = meals.find(meal => `${meal.id}` === searchId);
//     if (specificMeal) {
//       res.json(specificMeal);

//     } else {
//       res.status(404);
//       res.json("there is no such meal id,Pls check");
    
//     }
//   } catch (error) {
//     throw error;
//   }

// });


