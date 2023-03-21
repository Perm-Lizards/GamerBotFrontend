import './ProjectCard.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { ProgLangsEnum } from '../../common/enums/ProgLangsEnum';
import ProgLangs from '../prog_langs/ProgLangs';

type Props = {
  title: string;
  description?: string;
  progLangs?: ProgLangsEnum[];
  usersNumber: number | string;
  date: string;
  onClick?: () => void;
  className?: 'new_project_card' | 'own_project_card';
};

const ProjectCard = ({ title, description, progLangs, usersNumber, date, onClick, className }: Props) => {
  return (
    <div
      className={['project_card', className].join(' ')}
      onClick={onClick}>
      <div className='project_card-left_part'>
        <span className='project_card-left_part-title'>{title}</span>
        <span className='project_card-left_part-description'>{description}</span>
      </div>
      <div className='project_card-right_part'>
        <ProgLangs
          width={25}
          height={25}
          progLangs={progLangs}
          justifyContent='flex-end'
        />
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
