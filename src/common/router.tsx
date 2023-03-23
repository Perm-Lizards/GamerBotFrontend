import { createBrowserRouter } from 'react-router-dom';

import Profile from '../components/pages/profile/Profile';
import Projects from '../components/pages/projects/Projects';

export default createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
]);
