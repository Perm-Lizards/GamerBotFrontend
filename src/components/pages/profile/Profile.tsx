import './Profile.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import { ProgLangsEnum } from '../../../common/enums/ProgLangsEnum';
import Layout from '../../layout/Layout';
import ProgLangs from '../../prog_langs/ProgLangs';
import ProjectCard from '../../project_card/ProjectCard';
import EditProfilePopup from './components/edit_profile_popup/EditProfilePopup';
import Username from './components/username/Username';

const profile = {
  telegram: 'link',
  github: 'link',
  username: 'Koichi-hub',
  progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Go, ProgLangsEnum.Haskell] as ProgLangsEnum[],
  description: 'Какое-то описание',
  isOwner: true,
  projects: [
    {
      title: 'Проект 1',
      description: 'Описание к проекту 1',
      progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
      usersNumber: 1,
      createdAt: dayjs().format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 2',
      description: 'Описание к проекту 2',
      progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
      usersNumber: 1,
      createdAt: dayjs().subtract(1, 'day').format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 3',
      description: 'Описание к проекту 3',
      progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
      usersNumber: 1,
      createdAt: dayjs().subtract(2, 'day').format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 4',
      description: 'Описание к проекту 4',
      progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
      usersNumber: 1,
      createdAt: dayjs().subtract(3, 'day').format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 5',
      description: 'Описание к проекту 5',
      progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
      usersNumber: 1,
      createdAt: dayjs().subtract(4, 'day').format('DD.MM.YYYY'),
    },
  ],
};

const Profile = () => {
  const renderEditProfilePopup = useMemo(
    () =>
      profile.isOwner && (
        <div className='profile-edit'>
          <EditProfilePopup />
        </div>
      ),
    []
  );

  const renderProjects = useMemo(
    () =>
      profile.projects.map(({ title, description, progLangs, usersNumber, createdAt }, i) => (
        <ProjectCard
          title={title}
          description={description}
          progLangs={progLangs}
          usersNumber={usersNumber}
          createdAt={createdAt}
          key={i}
        />
      )),
    []
  );

  return (
    <Layout>
      <div className='profile'>
        {renderEditProfilePopup}
        <div className='profile-info'>
          <div className='profile-info-top_part'>
            <Username username={profile.username} />
            <div className='profile-info-top_part-logo'>
              <AccountCircleIcon />
            </div>
            <div className='profile-info-top_part-prog_langs'>
              <ProgLangs
                progLangs={profile.progLangs}
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className='profile-info-description'>{profile.description}</div>
          <Stack
            spacing={1}
            direction='row'>
            <Button
              variant='contained'
              startIcon={<TelegramIcon />}
              className='profile-info-buttons-telegram'>
              <span className='profile-info-buttons-telegram-text'>{profile.telegram}</span>
            </Button>
            <Button
              variant='contained'
              startIcon={<GitHubIcon />}
              className='profile-info-buttons-github'>
              <span className='profile-info-buttons-github-text'>{profile.github}</span>
            </Button>
          </Stack>
        </div>
        <div className='profile-projects'>{renderProjects}</div>
      </div>
    </Layout>
  );
};

export default Profile;
