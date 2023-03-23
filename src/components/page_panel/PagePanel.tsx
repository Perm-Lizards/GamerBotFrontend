import './PagePanel.scss';

import { PagesEnum } from '../../common/enums/PagesEnum';

type Props = {
  children?: string | JSX.Element;
  selectedPage: PagesEnum;
  page: PagesEnum;
};

const PagePanel = ({ children, selectedPage, page }: Props) => {
  return (
    <div
      hidden={selectedPage !== page}
      className='page_panel'>
      {children}
    </div>
  );
};

export default PagePanel;
