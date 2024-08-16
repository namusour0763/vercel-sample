CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (name, price) VALUES
  ('Product 1', 19.99),
  ('Product 2', 29.99),
  ('Product 3', 39.99);
