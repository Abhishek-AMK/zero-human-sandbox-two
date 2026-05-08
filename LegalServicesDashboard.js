import React from 'react';
import { ServiceCards, LawyerProfiles, ConsultationBookingForm, CaseStatusWidgets, FAQSection, ContactPanel } from './components';

const LegalServicesDashboard = () => {
  return (
    <div>
      <header>Legal Services Dashboard</header>
      <ServiceCards />
      <LawyerProfiles />
      <ConsultationBookingForm />
      <CaseStatusWidgets />
      <FAQSection />
      <ContactPanel />
    </div>
  );
};

export default LegalServicesDashboard;
