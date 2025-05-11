"use client";
import Link from "next/link";
import Stripe from "stripe";
import { Button } from "./ui/button";
import { useState } from "react";

interface ProductsListProps {
  products: Stripe.Product[];
}

function productslist({ products }: ProductsListProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch =
      product.description && product.description.toLowerCase().includes(term);

    return nameMatch || descriptionMatch;
  });

  if (!products || products.length === 0) {
    return <p className="text-center text-3xl">No products available.</p>;
  }
  return (
    <div className=" flex flex-col items-center justify-center container mx-auto mb-3 p-4 max-w-7xl">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
            <ul
              key={product.id}
              className="p-4 border rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 my-3">
                {product.default_price &&
                typeof product.default_price === "object" &&
                product.default_price.unit_amount
                  ? `$${(product.default_price.unit_amount / 100).toFixed(2)}`
                  : "Price not available"}
              </p>
              <Button className="transition duration-300 ease-in-out hover:scale-105 mb-2 w-full">
                <Link href={`/products/${product.id}`}>View Product</Link>
              </Button>
            </ul>
        ))}
      </div>
    </div>
  );
}

export default productslist;
