import React from 'react';
import { FeaturedShowBanner, EpisodeCards, CategoryTabs, ListeningQueueSidebar, HostProfiles, AudioPlayerControls } from './components';

const PodcastApp = () => {
  return (
    <div>
      <header>Podcast Streaming App</header>
      <FeaturedShowBanner />
      <CategoryTabs />
      <EpisodeCards />
      <ListeningQueueSidebar />
      <HostProfiles />
      <AudioPlayerControls />
    </div>
  );
};

export default PodcastApp;
