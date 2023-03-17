import { useState } from 'react';

export enum Pages {
  Projects = 'Projects',
  Profile = 'Profile',
}

export default () => {
  const [page, setPage] = useState(Pages.Profile);

  const onChangePage = (_: any, newPage: Pages) => {
    setPage(newPage);
  };

  return {
    page,
    onChangePage,
  };
};
