import { getBasketProducts, getProduct } from "../../db/model.js";
import Header from "../../components/header.jsx";

export async function getServerSideProps({ req, params }) {
  const sid = req.cookies.sid;
  const basket = sid ? await getBasketProducts(sid) : [];
  const product = await getProduct(params.id);
  return {
    props: {
      product,
      basketCount: basket.length,
    },
  };
}

export default function Product({ product, basketCount }) {
  return (
    <>
      <Header basketCount={basketCount} />
      <div>
        <h1>{product.name}</h1>
        <p>This is the individual product page</p>
        <form action="/api/add-to-basket" method="POST">
          <button name="product_id" value={product.id}>
            Add to basket
          </button>
        </form>
      </div>
    </>
  );
}
