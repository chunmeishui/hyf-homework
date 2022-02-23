
use hyf_lesson2_exercise;
-- 1.Get all the tasks assigned to Pavel;
SELECT
  task.title,
  user.name
FROM
  task
  JOIN user_task ON user_task.task_id = task.id
  JOIN user ON user_task.user_id = user.id
WHERE
  user.name = "Pavel Brushneen";
-- 2.Find how many tasks each user is responsible for;
SELECT
  COUNT(task.id) as total_task,
  user.name as name
FROM
  task
  JOIN user_task ON user_task.task_id = task.id
  JOIN user ON user_task.user_id = user.id
GROUP BY
  user.name;
-- 3,Find how many tasks with a status=Done each user is responsible for;
SELECT
  COUNT(task.id) as total_task
FROM
  task
  JOIN status ON status.id = task.status_id
  JOIN user_task ON user_task.task_id = task.id
  JOIN user ON user_task.user_id = user.id
WHERE
  status.name = "Done"
GROUP BY
  user.name;