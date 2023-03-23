import './main.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { PagesEnum } from './common/enums/PagesEnum';
import store from './common/store';
import PagePanel from './components/page_panel/PagePanel';
import Profile from './components/pages/profile/Profile';

const App = () => {
  const [page, setPage] = useState(PagesEnum.Profile);

  const onChangePage = (_: any, newPage: PagesEnum) => {
    setPage(newPage);
  };

  return (
    <div className='app'>
      <div className='app-content'>
        <PagePanel
          selectedPage={page}
          page={PagesEnum.Profile}>
          <Profile />
        </PagePanel>
        <PagePanel
          selectedPage={page}
          page={PagesEnum.Projects}>
          projects
        </PagePanel>
      </div>
      <BottomNavigation
        showLabels
        value={page}
        onChange={onChangePage}>
        <BottomNavigationAction
          label={PagesEnum.Profile}
          value={PagesEnum.Profile}
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label={PagesEnum.Projects}
          value={PagesEnum.Projects}
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
