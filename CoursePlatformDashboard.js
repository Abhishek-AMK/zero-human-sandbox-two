import React from 'react';
import { EnrolledCourseCards, LessonProgressTracker, InstructorPanel, AssignmentsList, CalendarWidget, AnnouncementsSection, StudentProfileArea } from './components';

const CoursePlatformDashboard = () => {
  return (
    <div>
      <header>Online Course Platform</header>
      <EnrolledCourseCards />
      <LessonProgressTracker />
      <InstructorPanel />
      <AssignmentsList />
      <CalendarWidget />
      <AnnouncementsSection />
      <StudentProfileArea />
    </div>
  );
};

export default CoursePlatformDashboard;
