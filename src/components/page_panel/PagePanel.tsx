import { Pages } from '../app/useApp';

type Props = {
  children?: string | JSX.Element;
  selectedPage: Pages;
  page: Pages;
};

const PagePanel = ({ children, selectedPage, page }: Props) => {
  return <div hidden={selectedPage !== page}>{children}</div>;
};

export default PagePanel;
