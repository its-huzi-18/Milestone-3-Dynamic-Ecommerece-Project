import React from 'react';
import ProductDetails from '@/app/component/ProductDetails';

const page = async ({ params }: { params: { id: string } }) => {
  try {
    const fetchingData = await fetch(`http://fakestoreapi.com/products/${params.id}`);
    if (!fetchingData.ok) {
      throw new Error(`Failed to fetch product. Status: ${fetchingData.status}`);
    }
    const response = await fetchingData.json();

    return (
      <div>
        <ProductDetails product={response} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return <div>Error loading product details. Please try again later.</div>;
  }
};

export default page;
