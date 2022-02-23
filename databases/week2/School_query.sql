SELECT
  *
FROM
  Class;
ALTER TABLE
  Class
ADD
  status ENUM("Not started","In progress","Done");
  -- add index to student name method 1
ALTER TABLE
  Student
ADD
  FULLTEXT INDEX idx_school_student_name (name);
    -- add index to student name method 2
  CREATE INDEX idx_school_student_name
ON Student (name);
ALTER TABLE
  Class
ADD
  ClassRemarks varchar(255);
-- delete column from the table
ALTER table
  Class DROP COLUMN ClassRemarks;
INSERT INTO
  Class (name, begin_date, end_date, status)
VALUES
  (
    'class22',
    '2022-04-22',
    '2022-08-09',
    'not-started'
  ),
  (
    'class23',
    '2022-06-22',
    '2022-10-06',
    'not-started'
  ),
  (
    'class24',
    '2022-12-22',
    '2023-04-01',
    'not-started'
  ),
  (
    'class25',
    '2023-06-22',
    '2023-12-12',
    'not-started'
  );
UPDATE
  Class
SET
  begin_date = "2021-12-01"
WHERE
  id = 2;
SELECT
  *
FROM
  Student;
insert into
  Student (name, email, phone, class_id)
values
  (
    'sunny',
    'sunny@gmail.com',
    '787878',
    1
  ),
  (
    'Amrit',
    'amrit@gmail.com',
    '5555555',
    2
  ),
  (
    'Hafiz',
    'hafiz@gmail.com',
    '234567',
    2
  ),
  (
    'negar',
    'negar@gmail.com',
    '555555',
    3
  ),
  (
    'Vahab',
    'vahab@gmail.com',
    '456789',
    3
  ),
  (
    'maryam',
    'maryam@gmail.com',
    '987654',
    4
  ),
  (
    'sweta',
    'sweta@gmail.com',
    '876543',
    4
  ),
  (
    'Anas',
    'anas@gmail.com',
    '567890',
    4
  );