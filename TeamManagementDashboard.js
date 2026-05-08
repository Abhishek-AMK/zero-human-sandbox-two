import React from 'react';
import { PlayerCards, MatchSchedule, PerformanceStats, StandingsTable, CoachNotesPanel, AnnouncementsSection } from './components';

const TeamManagementDashboard = () => {
  return (
    <div>
      <header>Sports Team Management</header>
      <PlayerCards />
      <MatchSchedule />
      <PerformanceStats />
      <StandingsTable />
      <CoachNotesPanel />
      <AnnouncementsSection />
    </div>
  );
};

export default TeamManagementDashboard;
