import './ProjectCard.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMemo } from 'react';

import { ProgLangs } from '../../common/types/ProgLangs';

type Props = {
  title: string;
  description?: string;
  progLangs?: ProgLangs[];
  usersNumber: number | string;
  date: string;
  onClick?: () => void;
  className?: 'new_project_card';
};

const ProjectCard = ({ title, description, progLangs, usersNumber, date, onClick, className }: Props) => {
  const renderProgLangs = useMemo(
    () =>
      progLangs?.map((_, i) => (
        <img
          className='project_card-right_part-prog_langs-icon'
          key={i}
        />
      )),
    [progLangs]
  );

  return (
    <div
      className={['project_card', className].join(' ')}
      onClick={onClick}>
      <div className='project_card-left_part'>
        <span className='project_card-left_part-title'>{title}</span>
        <span className='project_card-left_part-description'>{description}</span>
      </div>
      <div className='project_card-right_part'>
        <div className='project_card-right_part-prog_langs'>{renderProgLangs}</div>
        <div className='project_card-right_part-users_number'>
          <span className='project_card-right_part-users_number-text'>{usersNumber}</span>
          <AccountCircleIcon sx={{ fontSize: 20 }} />
        </div>
        <div className='project_card-right_part-date'>{date}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
