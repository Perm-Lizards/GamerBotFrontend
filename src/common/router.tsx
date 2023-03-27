import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Profile from '../components/pages/profile/Profile';
import Project from '../components/pages/project/Project';
import Projects from '../components/pages/projects/Projects';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:id',
        element: <Project />,
      },
    ],
  },
]);
