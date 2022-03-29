const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");
const app = express();

router.get("/:id", (req, rep) => {
    try {
      const specificreview = reviews.find(review => `${review.id}` === req.params.id );
      rep.json(specificreview)
    } catch (error) {
      throw error;
    }
  
  });
  
  router.get("/", (req, rep) => {
    try {
      rep.json(reviews)
    } catch (error) {
      throw error;
    }
  
  });
  
  module.exports = router;