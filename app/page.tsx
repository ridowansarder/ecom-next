import Carousel from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await stripe.products.list({
    limit: 5,
    expand: ["data.default_price"],
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 p-8 sm:py-12">
        <div className="grid grid-cols-1 mx-auto items-center justify-items-center gap-8 px-8 sm:grid-cols-2 sm:px-16">
          <div className="max-w-md space-y-4 flex items-center flex-col">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Welcome to Snorvo!</h2>
            <p className="text-neutral-600">Discover the latest products at best prices.</p>
            <Button className="hover:scale-105 transition-transform duration-300 ease-in-out">
              <Link href="/products">Browse all products</Link>
            </Button>
          </div>
          <Image
            alt="Banner Image"
            width={450}
            height={450}
            src={products.data[0].images[0]}
            className="w-full h-auto rounded-lg shadow-lg sm:max-w-sm hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </section>
      <section>
        <Carousel products={products.data}/>
      </section>
    </div>
  );
}
