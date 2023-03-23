import './Layout.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  children: JSX.Element | JSX.Element[];
};

enum RoutesEnum {
  ROOT = '/',
  Profile = '/profile',
  Projects = '/projects',
}

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const route = useMemo(() => (pathname === RoutesEnum.ROOT ? RoutesEnum.Profile : pathname), [pathname]);

  const onChange = (_: any, route: RoutesEnum) => {
    navigate(route);
  };

  return (
    <div className='layout'>
      <div className='layout-content'>{children}</div>
      <BottomNavigation
        showLabels
        value={route}
        onChange={onChange}>
        <BottomNavigationAction
          label='Профиль'
          value={RoutesEnum.Profile}
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          label='Проекты'
          value={RoutesEnum.Projects}
          icon={<CodeIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Layout;
