use library;
SELECT
  *
FROM
  author;
-- insert author
INSERT INTO
  author (name, email)
VALUES
  (
    "Aarika Ellingworth",
    "aellingworth0@harvard.edu"
  );
INSERT INTO
  author (name, email)
VALUES
  ('Pren Goldsworthy', 'pgoldsworthy1@spotify.com'),
  ('Pablo Kisbee', 'pkisbee2@lulu.com'),
  ('Rodie Duncan', 'rduncan3@quantcast.com');
-- genre
INSERT INTO
  genre(name)
VALUES
  ("Action and Adventure"),("languages"),("Classics"),("Comic Book or Graphic Novel");
-- member
INSERT INTO
  member(name, phone, email)
VALUES
  ("sunny", "55668963", "sunny@163.com"),("ammy", "23368963", "sunny@163.com"),("jone", "48958963", "jone@163.com"),("lina", "45268963", "lina@163.com"),("fie", "25768963", "fie@163.com");
-- rack
INSERT INTO
  rack(categary)
VALUES
  ("a-d"),("e-i"),("j-n"),("o-t"),("u-z");
-- book
ALTER TABLE
  book
MODIFY
  COLUMN price INT NOT NULL;
UPDATE
  book
SET
  price = 199
WHERE
  id = 9;
-- change the price to varchar type
INSERT INTO
  book (name, description, price, genre_id, rack_id)
VALUES
  ("Fokus", "Learning danlish", "349kr", 2, 2);
INSERT INTO
  book (name, description, price, genre_id, rack_id)
VALUES
  (
    "Harry Potter and the Chamber of Secrets",
    "Adventure fiction",
    "100kr",
    1,
    2
  ),
  (
    "black and red",
    "Classics",
    "156kr",
    3,
    1
  ),
  (
    "FokusPercy Jackson and the Lightning Thief",
    "Comic Book or Graphic Novel.",
    "233kr",
    2,
    2
  ),
  (
    "Fokus 4",
    "Learning danlish",
    "259kr",
    2,
    2
  ),
  ("Dune", "The Graphic Novel", "159kr", 4, 1),
  ("Jane Eyre", "classics", "199kr", 3, 3);
-- borrowLog
INSERT INTO
  borrowLog(borrow_date, return_date)
VALUES
  (
    '2017-10-15 06:54:16',
    '2017-10-25 13:05:09'
  ),(
    '2017-10-16 06:54:16',
    '2017-10-26 13:05:09'
  ),(
    '2017-10-15 08:54:16',
    '2017-10-25 15:05:09'
  ),(
    '2017-10-17 09:54:16',
    '2017-10-27 13:05:09'
  ),(
    '2017-10-17 10:54:16',
    '2017-10-27 14:05:09'
  );
-- book_author
INSERT INTO
  book_author(book_id, author_id)
VALUES
  (3, 1),(3, 3),(3, 4),(4, 1),(4, 3),(4, 4),(5, 3),(6, 4),(7, 2),(8, 3),(9, 4);
-- book_member_borrowLog
INSERT INTO
  book_member_borrowLog(book_id, member_id, borrowLog_id)
VALUES
  (3, 1, 1),(3, 2, 2),(3, 3, 4),(4, 1, 1),(5, 1, 1),(6, 2, 3),(6, 3, 4),(7, 2, 3),(8, 3, 5),(9, 1, 1);
-- select the book with author  which book price is greater than 200kr
SELECT
  book.name as "book name",
  book.price as price,
  author.name
FROM
  book
  join book_author on book_author.book_id = book.id
  join author on book_author.author_id = author.id
WHERE
  book.price > 200;
-- where did you put book name  Fokus 4
SELECT
  categary,
  book.name
from
  rack
  JOIN book ON book.rack_id = rack.id
WHERE
  book.name = "black and red";
-- 2017-10-15 08:54:16 the book that is borrowed by sunny
SELECT
  book.name as book,borrowLog.borrow_date,member.name as member,
  author.name as author
FROM
  book
  JOIN book_member_borrowLog ON book_member_borrowLog.book_id = book.id
  JOIN member ON member.id = book_member_borrowLog.member_id
  JOIN borrowLog ON borrowLog.id = book_member_borrowLog.borrowLog_id
  JOIN book_author ON book_author.book_id = book.id
  JOIN author ON book_author.author_id = author.id
WHERE
  borrowLog.borrow_date = "2017-10-15 08:54:16"
  ;