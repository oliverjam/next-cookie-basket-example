BEGIN;

DROP TABLE IF EXISTS products, basket CASCADE;

CREATE TABLE products (id SERIAL PRIMARY KEY, name TEXT);
CREATE TABLE basket (id SERIAL PRIMARY KEY, product_id INTEGER REFERENCES products(id), sid TEXT);

INSERT INTO products (name) VALUES 
  ('Banana'),
  ('Apple'),
  ('Kumquat'),
  ('Kiwi')
;

COMMIT;