import React from "react";
import { cn } from "@/lib/utils"; // Utility for class merging (optional)

const SkeletonCard = () => {
  return (
    <div className={cn("animate-pulse w-[180px]  md:w-[280px] rounded-md py-4 flex flex-col gap-4 justify-center items-center ")}>
      <div className="w-[180px] md:w-[240px] h-[240px] bg-gray-300 rounded-md"></div>
      <div className="w-[180px] md:w-[250px] h-6 bg-gray-300 rounded"></div>
      <div className="w-[180px] md:w-[220px] h-6 bg-gray-300 rounded"></div>
      <div className="w-[180px] md:w-[150px] h-6 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
