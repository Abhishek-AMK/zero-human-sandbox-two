import React from 'react';
import { PetServiceCards, BookingFormModal, CaregiverProfiles, AppointmentSchedule, TestimonialsSection, PricingSection } from './components';

const PetCareDashboard = () => {
  return (
    <div>
      <header>Pet Care Services</header>
      <PetServiceCards />
      <BookingFormModal />
      <CaregiverProfiles />
      <AppointmentSchedule />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
};

export default PetCareDashboard;
