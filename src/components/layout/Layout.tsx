import './Layout.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

enum RoutesEnum {
  Profile = '/profile',
  Projects = '/projects',
}

const RoutesRegex = {
  [RoutesEnum.Profile]: new RegExp(RoutesEnum.Profile),
  [RoutesEnum.Projects]: new RegExp(RoutesEnum.Projects),
} as {
  [key in RoutesEnum]: RegExp;
};

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const route = useMemo(() => {
    if (pathname === '/') {
      return RoutesEnum.Profile;
    }

    for (const route of Object.values(RoutesEnum) as Array<RoutesEnum>) {
      if (pathname.match(RoutesRegex[route])) {
        return route;
      }
    }
  }, [pathname]);

  const onChange = useCallback(
    (_: any, route: RoutesEnum) => {
      navigate(route);
    },
    [navigate]
  );

  return (
    <div className='layout'>
      <div className='layout-content'>
        <Outlet />
      </div>
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
