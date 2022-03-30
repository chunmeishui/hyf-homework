-- start exercise
SELECT name,-- 1
phone
FROM 
user;
SELECT name-- 2
FROM 
user
WHERE user.id =10;
SELECT COUNT(id)-- 3
FROM user;
SELECT name -- 4
FROM user LIMIT 5;
SELECT name,id --5
FROM user 
ORDER BY id DESC
LIMIT 3;
SELECT SUM(id) -- 6
FROM user;
SELECT name  -- 7
FROM user ORDER BY name ASC;
SELECT title,-- 8
description
FROM task
WHERE title LIKE "%sql%" OR description LIKE "%sql%";

SELECT title FROM task JOIN user ON task.user_id = user.id WHERE user.name LIKE "%Maryrose%";
--10
SELECT user.name,COUNT(task.id) FROM user JOIN task ON task.user_id = user.id GROUP BY user.name;
SELECT status.name FROM status;
-- 11
SELECT task.title,status.name FROM task JOIN status ON status.id = task.status_id  WHERE status.name like "%done%";


-- homework 
-- 1 Find out how many tasks are in the task table
SELECT COUNT(id) FROM task;

--2 Find out how many tasks in the task table do not have a valid due date
 SELECT COUNT(id) FROM task WHERE due_date IS NULL;
-- 3 Find all the tasks that are marked as done
SELECT title ,status.name FROM task JOIN status ON task.status_id = status.id WHERE status.name LIKE "%done%";
-- 4 Find all the tasks that are not marked as done
SELECT title,status.name FROM task JOIN status ON task.status_id = status.id WHERE status.name NOT LIKE "%done%";
-- 5 Get all the tasks, sorted with the most recently created first
SELECT title ,created FROM task ORDER BY created DESC;
-- 6 Get the single most recently created task
SELECT title, created FROM task ORDER BY created DESC LIMIT 1;
-- 7 Get the title and due date of all tasks where the title or description contains database
SELECT title,due_date FROM task WHERE title LIKE "%database%" OR description LIKE "% database%";
-- 8 Get the title and status (as text) of all tasks
SELECT task.title , status.name FROM task JOIN status ON  status.id = task. status_id;
-- 9 Get the name of each status, along with a count of how many tasks have that status

SELECT name ,COUNT(task.id) FROM status JOIN task ON  status.id = task. status_id GROUP BY status.name;
-- 10 Get the names of all statuses, sorted by the status with most tasks first
SELECT name ,COUNT(task.id) FROM status JOIN task ON  status.id = task. status_id GROUP BY status.name ORDER BY COUNT(task.id) DESC ;