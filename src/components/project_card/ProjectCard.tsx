import './ProjectCard.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { ProgLangs } from '../../common/types/ProgLangs';

type Props = {
  title: string;
  description: string;
  progLangs: ProgLangs[];
  usersNumber: number;
  date: string;
  onClick?: () => void;
};

const ProjectCard = ({ title, description, progLangs, usersNumber, date, onClick }: Props) => {
  return (
    <div
      className='project_card'
      onClick={onClick}>
      <div className='project_card-left_part'>
        <span className='project_card-left_part-title'>{title}</span>
        <span className='project_card-left_part-description'>{description}</span>
      </div>
      <div className='project_card-right_part'>
        <div className='project_card-right_part-prog_langs'>
          {progLangs.map((_, i) => (
            <img
              className='project_card-right_part-prog_langs-icon'
              key={i}
            />
          ))}
        </div>
        <div className='project_card-right_part-users_number'>
          <span className='project_card-right_part-users_number-text'>{usersNumber}</span>
          <AccountCircleIcon />
        </div>
        <div className='project_card-right_part-date'>{date}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
