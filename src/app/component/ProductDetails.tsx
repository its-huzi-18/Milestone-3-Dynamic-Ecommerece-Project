'use client';
import React from 'react';
import Image from 'next/image';
import StarRating from '@/app/component/StarRating';

import ItemAddNotification from './ItemAddNotification';

interface ProductProps {
  product: {
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
  };
}

const ProductDetails: React.FC<ProductProps> = ({ product }) => {

  return (
    <div key={product.id}>
      <div className='flex justify-center mt-12 mb-20 items-center'>
        <div className='w-[36%]'>
          <Image 
            className='w-[400px] rounded-md'
            src={product.image} 
            width={600} 
            height={600} 
            alt={product.title} 
          />
        </div>
        <div className='w-[40%] flex flex-col gap-3'>
          <p className='font-bold text-[26px]'>{product.title}</p>
          <StarRating rating={product.rating.rate} />
          <h3 className='font-bold text-cyan-600 text-[24px]'>${product.price}</h3>
          <div className='text-cyan-700 font-medium gap-2 flex'>
            <span className='text-black dark:text-gray-500 border-r-[2px] pr-2 border-black/70'>Item</span>{product.rating.count}
          </div>
          <div className='-mt-1 text-cyan-700 font-medium gap-2 flex'>
            <span className='text-black border-r-[2px] pr-2 dark:text-gray-500 border-black/70'>Category</span>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </div>
          <p className='tracking-wide text-[16x]'>{product.description.charAt(0).toUpperCase() + product.description.slice(1)}</p>
          <div className='items-center flex gap-4'>
          <ItemAddNotification cartItem={{ ...product, quantity: 1 }} buttonSize="px-4 py-[13px] rounded-md" />
          <button className='bg-green-600 text-white rounded-md px-6 py-3 hover:opacity-85'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
