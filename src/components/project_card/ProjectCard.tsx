import './ProjectCard.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack } from '@mui/material';

import { ProgLangsEnum } from '../../common/enums/ProgLangsEnum';
import ProgLangs from '../prog_langs/ProgLangs';

type Props = {
  title: string;
  description?: string;
  progLangs?: ProgLangsEnum[];
  usersNumber: number | string;
  createdAt: string;
  isOwned?: boolean;
};

const ProjectCard = ({ title, description, progLangs, usersNumber, createdAt }: Props) => {
  return (
    <>
      <div className='project_card'>
        <Stack
          justifyContent='space-between'
          direction='row'>
          <Stack gap='5px'>
            <span className='project_card-title'>{title}</span>
            <span className='project_card-description'>{description}</span>
          </Stack>
          <Stack gap='5px'>
            <ProgLangs
              width={25}
              height={25}
              progLangs={progLangs}
              justifyContent='flex-end'
            />
            <div className='project_card-users_number'>
              <span className='project_card-users_number-text'>{usersNumber}</span>
              <AccountCircleIcon sx={{ fontSize: 20 }} />
            </div>
            <div className='project_card-createdAt'>{createdAt}</div>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default ProjectCard;
