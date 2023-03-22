import './main.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { Pages } from './common/enums/Pages';
import store from './common/store';
import PagePanel from './components/page_panel/PagePanel';
import Profile from './components/profile/Profile';

const App = () => {
  const [page, setPage] = useState(Pages.Profile);

  const onChangePage = (_: any, newPage: Pages) => {
    setPage(newPage);
  };

  return (
    <div className='app'>
      <div className='app-content'>
        <PagePanel
          selectedPage={page}
          page={Pages.Profile}>
          <Profile />
        </PagePanel>
        <PagePanel
          selectedPage={page}
          page={Pages.Projects}>
          projects
        </PagePanel>
      </div>
      <BottomNavigation
        showLabels
        value={page}
        onChange={onChangePage}>
        <BottomNavigationAction
          label={Pages.Profile}
          value={Pages.Profile}
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label={Pages.Projects}
          value={Pages.Projects}
          icon={<CodeIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
