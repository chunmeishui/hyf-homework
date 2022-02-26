use hyf_lesson3_homework;
-- meal table
-- Get all meals
SELECT
  *
FROM
  meal;
-- Add a new meal
INSERT INTO
  meal (
    `title`,
    `description`,
    `location`,
    `when`,
    `max_reservations`,
    `price`,
    `created_date`
  )
VALUES(
    'Gong Baked Chicken',
    'Gong Baked Chicken with traditional way of cooking',
    'lyngby',
    '2022-02-01 08:00:00',
    50,
    108,
    '2020-01-02'
  );
-- Get a meal with any id, fx 1
SELECT
  title
FROM
  meal
WHERE
  id = 5;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  meal
SET
  title = "Fried Shrimps"
WHERE
  id = 1;
-- Delete a meal with any id, fx 1
DELETE FROM
  meal
where
  id = 7;
-- Reservation table
  -- Get all reservations
SELECT
  *
FROM
  reservation;
-- Add a new reservation
INSERT INTO
  reservation(
    number_of_guests,
    created_date,
    contact_phonenumber,
    contact_name,
    contact_email,
    meal_id
  )
VALUES
  (
    5,
    "2022-02-15",
    "8760659",
    "chunmei",
    "chunmei@163.com",
    6
  );
-- Get a reservation with any id, fx 1
SELECT
  *
FROM
  reservation
WHERE
  id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  reservation
SET
  contact_name = "mariem"
WHERE
  id = 14;
-- Delete a reservation with any id, fx 1
DELETE FROM
  reservation
WHERE
  id = 14;
-- review table
  -- Get all reviews
SELECT
  *
FROM
  review;
-- Add a new review
INSERT INTO
  review(title, description, stars, created_date, meal_id)
VALUES
  (
    "feedback on Fried Shrimps",
    "normal Fried Shrimps with cheap price",
    4,
    "2021-02-01",
    1
  );
-- Get a review with any id, fx 1
SELECT
  *
FROM
  review
WHERE
  id = 5;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE
  review
SET
  stars = 5
WHERE
  id = 6;
-- Delete a review with any id, fx 1
DELETE FROM
  review
WHERE
  id = 19;
-- Additional queries
  -- Get meals that has a price smaller than a specific price fx 90
SELECT
  *
FROM
  meal
WHERE
  price < 90;
-- Get meals that still has available reservations ????

SELECT
meal.title,
meal.id,
reservation.meal_id
FROM
  meal
  JOIN reservation ON reservation.meal_id = meal.id
WHERE meal.max_reservations > SUM(number_of_guests);

SELECT
  meal_id,
  number_of_guests
FROM
  reservation
where
  meal_id = 2;
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT
  title
FROM
  meal
WHERE
  title like "%fri%";
-- Get meals that has been created between two dates
SELECT
  *
FROM
  meal
WHERE
  created_date > "2022-02-11"
  AND created_date < "2022-02-16";
-- Get only specific number of meals fx return only 5 meals
SELECT
  title
FROM
  meal
limit
  5;
-- Get the meals that have good reviews
SELECT
  meal.title
FROM
  meal
  JOIN review ON review.meal_id = meal.id
WHERE
  stars = 5;
-- Get reservations for a specific meal sorted by created_date
SELECT
  meal.title,
  meal.id,
  reservation.created_date
FROM
  meal
  JOIN reservation ON meal.id = reservation.meal_id
WHERE
  meal_id = 3
ORDER BY
  reservation.created_date;
-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  round(AVG(review.stars))
FROM
  meal
  JOIN review ON meal.id = review.meal_id
GROUP BY
  meal.title
ORDER BY
  round(AVG(review.stars));