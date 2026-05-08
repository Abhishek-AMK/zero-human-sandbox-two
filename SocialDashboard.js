import React from 'react';
import { FeedSection, StoriesRow, FriendSuggestions, ChatSidebar, NotificationsPanel, ProfileSummaryCard, TrendingTopicsArea } from './components';

const SocialDashboard = () => {
  return (
    <div>
      <header>Social Networking Dashboard</header>
      <FeedSection />
      <StoriesRow />
      <FriendSuggestions />
      <ChatSidebar />
      <NotificationsPanel />
      <ProfileSummaryCard />
      <TrendingTopicsArea />
    </div>
  );
};

export default SocialDashboard;
