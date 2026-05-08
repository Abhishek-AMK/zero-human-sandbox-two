import React from 'react';
import { HeroBanner, ProductGrid, CategoryFilters, WishlistDrawer, ProductQuickViewModal, TestimonialsSection, NewsletterSection } from './components';

const FashionStoreApp = () => {
  return (
    <div>
      <header>Fashion Store</header>
      <HeroBanner />
      <CategoryFilters />
      <ProductGrid />
      <WishlistDrawer />
      <ProductQuickViewModal />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default FashionStoreApp;
