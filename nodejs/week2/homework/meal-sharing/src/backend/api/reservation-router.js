const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");
const app = express();

router.get("/:id", (req, rep) => {
    try {
      const specificReservation = reservations.find(reservation => `${reservation.id}` === req.params.id );
      rep.json(specificReservation)
    } catch (error) {
      throw error;
    }
  
  });
  router.get("/", (req, rep) => {
    try {
      rep.json(reservations)
    } catch (error) {
      throw error;
    }
  
  });

  module.exports = app;