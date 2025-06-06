import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import CollegeProfile from '../pages/CollegeProfile';
import ContentStudio from '../pages/ContentStudio';
import VisualDesigner from '../pages/VisualDesigner';
import CampaignShowcase from '../pages/CampaignShowcase';
import AnalyticsDashboard from '../pages/AnalyticsDashboard';
import InteractiveQA from '../pages/InteractiveQA';

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
    ],
  },
]);

export default router;
