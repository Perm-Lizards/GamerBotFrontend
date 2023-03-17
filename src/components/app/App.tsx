import './App.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import PagePanel from '../page_panel/PagePanel';
import useApp, { Pages } from './useApp';

const App = () => {
  const { page, onChangePage } = useApp();

  return (
    <div className='app'>
      <div className='app-content'>
        <PagePanel
          selectedPage={page}
          page={Pages.Profile}>
          profile
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

export default App;
