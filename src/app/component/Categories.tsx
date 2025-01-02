import React, { useState } from "react";
import { Poppins } from "next/font/google";
import SkeletonCategory from "@/app/component/ui/CategorySkeleton"; // Import Skeleton Component

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const Categories = ({
  onCategoryClick,
}: {
  onCategoryClick: (category: string) => void;
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // New loading state

  React.useEffect(() => {
    const fetchCategories = async () => {
      const fethingData = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const response = await fethingData.json();
      setCategories(response);
      setLoading(false); // Set loading to false once data is fetched
    };

    fetchCategories();
  }, []);

  return (
    <div className="my-10 bg-transparent dark:bg-zinc-900 rounded-md shadow-2xl  w-[250px] flex justify-center h-[300px] items-center">
      {loading ? (
        <SkeletonCategory /> // Show skeleton loader when loading
      ) : (
        <ul className="flex flex-col gap-4">
          <h2
            className={`text-2xl font-bold  text-blue-600 ${poppins.className}`}
          >
            Categories
          </h2>
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => onCategoryClick(category)}
                className="text-base font-bold focus:underline focus:text-black dark:focus:text-zinc-400"
              >
                {category.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
