import React from 'react';
import { ServiceCategoryCards, ProviderProfiles, BookingCalendar, PricingWidgets, CustomerReviews, OrderSummaryPanel } from './components';

const HomeServicesApp = () => {
  return (
    <div>
      <header>Home Services Booking</header>
      <ServiceCategoryCards />
      <ProviderProfiles />
      <BookingCalendar />
      <PricingWidgets />
      <CustomerReviews />
      <OrderSummaryPanel />
    </div>
  );
};

export default HomeServicesApp;
