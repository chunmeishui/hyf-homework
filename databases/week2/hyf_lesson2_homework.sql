-- Part 1: Working with tasks
INSERT INTO
  task(
    title,
    description,
    created,
    updated,
    due_date,
    status_id
  )
VALUES
  (
    "studying",
    "study with coding database",
    "2022-02-07",
    "2022-02-07",
    "2022-06-01",
    1
  );
UPDATE
  task
SET
  title = "prepare for week3 database"
WHERE
  id = 36;
UPDATE
  task
SET
  due_date = "2022-01-01"
WHERE
  id = 36;
UPDATE
  task
SET
  status_id = 2
WHERE
  id = 36;
UPDATE
  task
SET
  status_id = 3
WHERE
  id = 1;
DELETE FROM
  task
WHERE
  id = 36;
--   Part 3: More queries
SELECT
  task.title,
  user.email
FROM
  task
  JOIN user_task ON task.id = user_task.task_id
  JOIN user ON user.id = user_task.user_id
WHERE
  user.email LIKE "%@spotify.com";
SELECT
  task.title,
  status.name as status,
  user.name as name
FROM
  task
  JOIN status ON status.id = task.status_id
  JOIN user_task ON task.id = user_task.task_id
  JOIN user ON user.id = user_task.user_id
WHERE
  user.name = "Donald Duck"
  AND status.name = "Not started";
SELECT
  user.name,
  COUNT(task.id)
FROM
  task
  JOIN user_task ON task.id = user_task.task_id
  JOIN user ON user.id = user_task.user_id
WHERE
  user.name = "Maryrose Meadows"
GROUP BY
  month(task.created) = 9;
SELECT
  count(task.id), month(created)
FROM
  task
GROUP BY
  month(created);
-- changed the created of id = 35 to month 11th .
UPDATE
  task
SET
  created = "2022-11-01"
WHERE
  id = 35;