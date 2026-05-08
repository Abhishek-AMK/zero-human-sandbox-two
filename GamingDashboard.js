import React from 'react';
import { PlayerStatsCards, Leaderboard, AchievementsPanel, GameLibraryGrid, RecentActivityFeed, FriendsSidebar } from './components';

const GamingDashboard = () => {
  return (
    <div>
      <header>Gaming Dashboard</header>
      <PlayerStatsCards />
      <Leaderboard />
      <AchievementsPanel />
      <GameLibraryGrid />
      <RecentActivityFeed />
      <FriendsSidebar />
    </div>
  );
};

export default GamingDashboard;
