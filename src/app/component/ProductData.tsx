import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import Heading from "./Heading";
import ItemAddNotification from "./ItemAddNotification";
import SkeletonCard from "@/app/component/ui/SkeletonCart";

async function fetchProducts(category?: string) {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : `https://fakestoreapi.com/products`;
  const fetchingData = await fetch(url);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return await fetchingData.json();
}

interface ProductDataTypes {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductData = ({
  selectedCategory,
  onResetCategory,
}: {
  selectedCategory: string;
  onResetCategory: () => void;
}) => {
  const [products, setProducts] = useState<ProductDataTypes[]>([]);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await fetchProducts(selectedCategory);
      setProducts(response);
      setLoading(false);
    };

    loadProducts();
  }, [selectedCategory]);

  return (
    <div>
      <Heading category={selectedCategory} />

      <ul className="flex justify-center items-center flex-wrap gap-14 space-y-2">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>
                <SkeletonCard />
              </li>
            ))
          : products.map((data) => (
              <li key={data.id}>
                <div className="hover:shadow-lg  md:w-[280px] rounded-md py-4 flex flex-col gap-4 justify-center items-center bg-transparent">
                  <Link href={`/ProductData/${data.id}`}>
                    <Image
                      className=" rounded-md mb-2 object-fill w-[240px] h-[240px]"
                      src={data.image}
                      width={300}
                      height={300}
                      alt={data.title}
                    />
                  </Link>
                  <h3 className="w-[250px] font-semibold">{data.title}</h3>
                  <div className="w-[220px] flex gap-4 items-center justify-between">
                    <span className="text-blue-600 font-medium">
                      {data.price}$
                    </span>
                    <div>
                      <span className="text-gray-800 dark:text-zinc-400 text-sm">
                        ITEM:
                      </span>{" "}
                      {data.rating.count}
                    </div>
                  </div>
                  <StarRating rating={data.rating.rate} />
                  <ItemAddNotification cartItem={{ ...data, quantity: 1 }} />
                </div>
              </li>
            ))}
      </ul>

      {selectedCategory && (
        <div className="text-center my-8">
          <button
            onClick={onResetCategory}
            className="text-blue-600 underline font-semibold text-lg"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductData;
