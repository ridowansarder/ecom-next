import Image from "next/image";
import Stripe from "stripe";
import { Button } from "./ui/button";

interface ProductDetailsProps {
  product: Stripe.Product;
}

function ProductDetails({ product }: ProductDetailsProps) {
  const price = product.default_price as Stripe.Price;
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2">
        {product.images && product.images.length > 0 && (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-ful max-w-2xl h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        )}
      </div>
        <div className="md:w-1/2 md:ml-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-4">
            {product.description || "No description available."}
            </p>
            <p className="text-xl font-semibold mb-4">
            Price: $
            {price && typeof price.unit_amount === "number"
                ? (price.unit_amount / 100).toFixed(2)
                : "Price not available"}
            </p>
            <Button className="transition duration-300 ease-in-out hover:scale-105">
            Add to Cart
            </Button>
        </div>
    </div>
  );
}

export default ProductDetails;
