import { addToBasket } from "../../db/model.js";

export default async function (req, res) {
  const id = req.body.product_id;
  const sid = req.cookies.sid;
  await addToBasket(id, sid);
  // go back to same page
  res.redirect(`/products/${id}`);
}
