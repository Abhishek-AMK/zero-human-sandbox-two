import React from 'react';
import { CampaignCards, DonationProgressBars, FeaturedCauses, DonorTestimonials, ImpactStats, DonationModal } from './components';

const FundraisingPlatform = () => {
  return (
    <div>
      <header>Donation and Fundraising Platform</header>
      <CampaignCards />
      <FeaturedCauses />
      <DonationProgressBars />
      <DonorTestimonials />
      <ImpactStats />
      <DonationModal />
    </div>
  );
};

export default FundraisingPlatform;
