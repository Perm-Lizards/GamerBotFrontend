import './Project.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import { ProgLangsEnum } from '../../../common/enums/ProgLangsEnum';
import { RolesEnum } from '../../../common/enums/RolesEnum';
import { ProjectType } from '../../../common/types/ProjectType';
import ProgLangs from '../../prog_langs/ProgLangs';
import EditProjectPopup from './components/edit_project_popup/EditProjectPopup';

const project = {
  telegram: 'link',
  github: 'link',
  title: 'Проект 5',
  description: 'Описание к проекту 5',
  progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
  usersNumber: 1,
  createdAt: dayjs().subtract(4, 'day').format('DD.MM.YYYY'),
} as ProjectType;

const member = {
  role: RolesEnum.PROJECT_OWNER,
};

const Project = () => {
  const renderEditProjectPopup = useMemo(() => {
    if (member.role === RolesEnum.PROJECT_OWNER || member.role === RolesEnum.PROJECT_ADMIN) {
      return <EditProjectPopup project={project} />;
    }
  }, []);

  const renderActionButton = useMemo(() => {
    if (member.role === RolesEnum.PROJECT_MEMBER || member.role === RolesEnum.PROJECT_ADMIN || member.role === RolesEnum.PROJECT_OWNER) {
      return (
        <Button
          variant='contained'
          className='project-info-action_button'
          color='error'>
          <span className='project-info-action_button-text'>Покинуть</span>
        </Button>
      );
    } else {
      return (
        <Button
          variant='contained'
          className='project-info-action_button'
          color='primary'>
          <span className='project-info-action_button-text'>Вступить</span>
        </Button>
      );
    }
  }, []);

  return (
    <Stack className='project'>
      <Stack
        padding='10px'
        justifyContent='space-between'
        direction='row'
        className='project-info'>
        <Stack
          justifyContent='space-between'
          gap='15px'>
          <Stack gap='5px'>
            <span className='project-info-title'>{project.title}</span>
            <span className='project-info-description'>{project.description}</span>
          </Stack>
          <Stack
            gap='5px'
            className='project-info-buttons'>
            <Button
              variant='contained'
              startIcon={<TelegramIcon />}
              className='project-info-buttons-telegram'>
              <span className='project-info-buttons-telegram-text'>{project.telegram}</span>
            </Button>
            <Button
              variant='contained'
              startIcon={<GitHubIcon />}
              className='project-info-buttons-github'>
              <span className='project-info-buttons-github-text'>{project.github}</span>
            </Button>
          </Stack>
        </Stack>
        <Stack
          justifyContent='space-between'
          gap='15px'>
          <Stack gap='10px'>
            <ProgLangs
              progLangs={project.progLangs}
              width={30}
              height={30}
            />
            <div className='project-info-users_number'>
              <span className='project-info-users_number-text'>{project.usersNumber}</span>
              <AccountCircleIcon sx={{ fontSize: 20 }} />
            </div>
            <div className='project-info-createdAt'>{project.createdAt}</div>
          </Stack>
          <Stack
            gap='5px'
            alignItems='flex-end'>
            {renderEditProjectPopup}
            {renderActionButton}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Project;
