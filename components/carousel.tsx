"use client";
import Stripe from "stripe";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface CarouselProps {
  products: Stripe.Product[];
}

function Carousel({ products }: CarouselProps) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];
  const currentPrice = currentProduct.default_price as Stripe.Price;
  const currentImage = currentProduct.images[0];
  return (
    <Card className="relative w-full h-80 overflow-hidden">
      {currentImage && (
        <div className="absolute inset-0">
          <Image
            src={currentImage}
            alt={currentProduct.name}
            layout="fill"
            objectFit="cover"
            className="w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      )}
      <CardContent className="relative z-10 flex flex-col items-center justify-center h-full bg-amber-500 bg-opacity-70 p-4">
        <CardTitle className="text-2xl font-bold text-white">
          {currentProduct.name}
        </CardTitle>
        <p className="text-lg text-white">
          ${(currentPrice && currentPrice.unit_amount! / 100).toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}

export default Carousel;
