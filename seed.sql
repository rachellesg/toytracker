INSERT INTO users
(name, email, password)
VALUES
('admin', 'admin@ga.com', '123');

INSERT INTO companies
(name)
VALUES
('WWF');

INSERT INTO companies
(name)
VALUES
('WWE');

INSERT INTO companies
(name)
VALUES
('WCW');

INSERT INTO brands
(name)
VALUES
('Hasbro');

INSERT INTO brands
(name)
VALUES
('Mattel');

INSERT INTO brands
(name)
VALUES
('LJN');

INSERT INTO brands
(name)
VALUES
('Galoob');

INSERT INTO brands
(name)
VALUES
('Others');

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('1', 1, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('2', 1, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('3', 1, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('4', 1, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('5', 1, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('Ring', 1, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('1', 2, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('2', 2, 1);

-- INSERT INTO series
-- (name, company, brand)
-- VALUES
-- ('Ring', 2, 1);

INSERT INTO collections
(name, created, user_id)
VALUES
('My Favourite Hasbro Figures', CURRENT_TIMESTAMP, 2);

INSERT INTO collections
(name, created, user_id)
VALUES
('Hasbros Series 11', CURRENT_TIMESTAMP, 2);

INSERT INTO collections
(name, created, user_id)
VALUES
('Honey Boo Boo', CURRENT_TIMESTAMP, 2);

INSERT INTO collections
(name, created, user_id)
VALUES
('Nick and Vanessa Lachey', CURRENT_TIMESTAMP, 2);

-- INSERT into items
-- (name, year, collection, company, brand, condition, price, created, user_id)
-- VALUES
-- ('King Of The Ring ring', '1997', 1, 1, 2, 'Mint', '435', CURRENT_TIMESTAMP, 2);