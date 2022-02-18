import Link from "next/link";
import { getBasketProducts, getProducts } from "../db/model.js";
import Header from "./components/header.jsx";

export async function getServerSideProps({ req, res }) {
  const sid = req.cookies.sid;
  const basket = sid ? await getBasketProducts(sid) : [];
  const products = await getProducts();
  return { props: { products, basketCount: basket.length } };
}

export default function Home({ products, basketCount }) {
  return (
    <>
      <Header basketCount={basketCount} />
      <div>
        {!products.length ? (
          <div>No products yet!</div>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
