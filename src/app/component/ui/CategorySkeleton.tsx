import React from "react";

const SkeletonCategory = () => {
  return (
    <div className="animate-pulse w-[250px] h-[300px] bg-gray-200 dark:bg-zinc-800 rounded-md shadow-lg flex justify-center items-center">
      <ul className="flex flex-col gap-4 w-full items-center">
        <div className="w-3/4 h-6 bg-gray-300 rounded-md"></div>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index} className="w-2/3 h-4 bg-gray-300 rounded-md"></li>
        ))}
      </ul>
    </div>
  );
};

export default SkeletonCategory;
