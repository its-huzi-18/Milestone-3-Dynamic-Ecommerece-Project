'use client'
import React, { useState } from 'react';
import Categories from '@/app/component/Categories';
import ProductData from '@/app/component/ProductData';
import HeroSection from '@/app/component/HeroSection';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    console.log('Selected category:', category); // Debugging line to check category
    setSelectedCategory(category);
  };
  const resetCategory = () => {
    setSelectedCategory('');
  };
  return (
    <div>
      <div className='flex justify-around my-10'>
      <Categories onCategoryClick={handleCategoryClick} />
      <HeroSection />
      </div>
      <ProductData selectedCategory={selectedCategory}
      onResetCategory={resetCategory} 
      />
    </div>
  );
};

export default MainPage;
