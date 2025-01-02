import React from 'react';

interface HeadingProps {
  category: string;
}

function Heading({ category }: HeadingProps) {
  return (
    <div className='flex h-12 my-20 border-b-[1px] shadow-md border-gray-600 pb-2 items-center justify-between px-20'>
      <h2 className='text-3xl font-semibold'>{category.toUpperCase() || 'Best Selling Products'}</h2>
    </div>
  );
}

export default Heading;
