'use client';
import React, { useState } from 'react';
import LayoutSection from '@/app/component/HeroSection';
import ProductData from '@/app/component/ProductData';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    console.log('Selected category:', category);
    setSelectedCategory(category);
  };

  const resetCategory = () => {
    setSelectedCategory('');
  };

  return (
    <div>
      <LayoutSection onCategoryClick={handleCategoryClick} />
      <ProductData
        selectedCategory={selectedCategory}
        onResetCategory={resetCategory}
      />
    </div>
  );
};

export default MainPage;
