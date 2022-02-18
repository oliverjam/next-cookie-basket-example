import db from "./connect.js";

export function getProducts() {
  return db.query("SELECT id, name FROM products").then((res) => res.rows);
}

export function getProduct(id) {
  return db
    .query("SELECT id, name FROM products WHERE id = $1", [id])
    .then((res) => res.rows[0]);
}

export function addToBasket(product_id, sid) {
  const insert = `INSERT INTO basket (product_id, sid) VALUES ($1, $2)`;
  return db.query(insert, [product_id, sid]);
}

export function getBasketProducts(sid) {
  const select = /*sql*/ `
    SELECT products.id, products.name
    FROM basket JOIN products ON basket.product_id = products.id
    WHERE sid = $1
  `;
  return db.query(select, [sid]).then((res) => res.rows);
}
