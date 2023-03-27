import './ProjectCard.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Stack } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProjectType } from '../../common/types/ProjectType';
import ProgLangs from '../prog_langs/ProgLangs';

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project: { id, title, description, progLangs, usersNumber, createdAt } }: Props) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(`/projects/${id}`);
  }, [id, navigate]);

  return (
    <Stack
      justifyContent='space-between'
      direction='row'
      className='project_card'
      onClick={onClick}>
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
  );
};

export default ProjectCard;
