import React from 'react';
import { FeaturedCarBanner, SearchFilters, CarListingGrid, ComparisonCards, DealerProfiles, FinancingWidgets, InquiryModal } from './components';

const CarDealershipPlatform = () => {
  return (
    <div>
      <header>Car Dealership Platform</header>
      <FeaturedCarBanner />
      <SearchFilters />
      <CarListingGrid />
      <ComparisonCards />
      <DealerProfiles />
      <FinancingWidgets />
      <InquiryModal />
    </div>
  );
};

export default CarDealershipPlatform;
