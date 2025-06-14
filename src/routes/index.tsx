import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import CollegeProfile from '../pages/CollegeProfile';
import ContentStudio from '../pages/ContentStudio';
import VisualDesigner from '../pages/VisualDesigner';
import CampaignShowcase from '../pages/CampaignShowcase';
import AnalyticsDashboard from '../pages/AnalyticsDashboard';
import InteractiveQA from '../pages/InteractiveQA';
import StudentPreview from '../pages/StudentPreview';
import TaskCenter from '../pages/TaskCenter';
import TemplateMarket from '../pages/TemplateMarket';
import VolunteerSimulator from '../pages/VolunteerSimulator';
import LiveSessions from '../pages/LiveSessions';
import StudentAmbassadors from '../pages/StudentAmbassadors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'college-profile',
        element: <CollegeProfile />,
      },
      {
        path: 'content-studio',
        element: <ContentStudio />,
      },
      {
        path: 'visual-designer',
        element: <VisualDesigner />,
      },
      {
        path: 'campaign-showcase',
        element: <CampaignShowcase />,
      },
      {
        path: 'analytics-dashboard',
        element: <AnalyticsDashboard />,
      },
      {
        path: 'interactive-qa',
        element: <InteractiveQA />,
      },
      {
        path: 'student-preview',
        element: <StudentPreview />,
      },
      {
        path: 'task-center',
        element: <TaskCenter />,
      },
      {
        path: 'template-market',
        element: <TemplateMarket />,
      },
      {
        path: 'volunteer-simulator',
        element: <VolunteerSimulator />,
      },
      {
        path: 'live-sessions',
        element: <LiveSessions />,
      },
      {
        path: 'student-ambassadors',
        element: <StudentAmbassadors />,
      },
    ],
  },
]);

export default router;
