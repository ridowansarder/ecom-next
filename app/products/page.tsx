import { stripe } from "@/lib/stripe";
import ProductsList from "@/components/productslist";

const Products = async () => {
  
  const products = await stripe.products.list({
      expand: ["data.default_price"],
    });
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-4">
        Our Products
      </h1>
      <ProductsList products={products.data} />
    </div>
  )
}

export default Products