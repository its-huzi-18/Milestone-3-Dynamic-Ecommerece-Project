import React from 'react';
import ProductDetails from '@/app/component/ProductDetails';

const page = async ({ params }: { params: { id: string } }) => {
  const fetchingData = await fetch(`http://fakestoreapi.com/products/${params.id}`);
  const response = await fetchingData.json();

  return (
    <div>
      <ProductDetails product={response} />
    </div>
  );
};

export default page;
