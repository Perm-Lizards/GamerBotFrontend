import './Profile.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button, Stack } from '@mui/material';
import dayjs from 'dayjs';

import { ProgLangs } from '../../../common/types/ProgLangs';
import ProjectCard from '../../project_card/ProjectCard';

const data = {
  telegram: 'link',
  github: 'link',
  username: 'Имя пользователя',
  progLangs: [ProgLangs.JavaScript] as ProgLangs[],
  description: 'Какое-то описание',
  projects: [
    {
      title: 'Проект 1',
      description: 'Описание к проекту 1',
      progLangs: [ProgLangs.C, ProgLangs.Go, ProgLangs.TypeScript] as ProgLangs[],
      usersNumber: 1,
      date: dayjs().format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 2',
      description: 'Описание к проекту 2',
      progLangs: [ProgLangs.C, ProgLangs.Go, ProgLangs.TypeScript] as ProgLangs[],
      usersNumber: 1,
      date: dayjs().subtract(1, 'day').format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 3',
      description: 'Описание к проекту 3',
      progLangs: [ProgLangs.C, ProgLangs.Go, ProgLangs.TypeScript] as ProgLangs[],
      usersNumber: 1,
      date: dayjs().subtract(2, 'day').format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 4',
      description: 'Описание к проекту 4',
      progLangs: [ProgLangs.C, ProgLangs.Go, ProgLangs.TypeScript] as ProgLangs[],
      usersNumber: 1,
      date: dayjs().subtract(3, 'day').format('DD.MM.YYYY'),
    },
    {
      title: 'Проект 5',
      description: 'Описание к проекту 5',
      progLangs: [ProgLangs.C, ProgLangs.Go, ProgLangs.TypeScript] as ProgLangs[],
      usersNumber: 1,
      date: dayjs().subtract(4, 'day').format('DD.MM.YYYY'),
    },
  ],
};

type Data = typeof data;

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile-info'>
        <div className='profile-info-top_part'>
          <div className='profile-info-top_part-username'>
            <div className='profile-info-top_part-username-text marquee'>
              <span>{data.username}</span>
              <span>{data.username}</span>
            </div>
          </div>
          <div className='profile-info-top_part-logo'>
            <img
              src=''
              alt=''
            />
          </div>
          <div className='profile-info-top_part-prog_langs'>
            <span>{data.progLangs}</span>
          </div>
        </div>
        <div className='profile-info-description'>{data.description}</div>
        <Stack
          spacing={1}
          direction='row'>
          <Button
            variant='contained'
            startIcon={<TelegramIcon />}
            className='profile-info-buttons-telegram'>
            <span className='profile-info-buttons-telegram-text'>{data.telegram}</span>
          </Button>
          <Button
            variant='contained'
            startIcon={<GitHubIcon />}
            className='profile-info-buttons-github'>
            <span className='profile-info-buttons-github-text'>{data.github}</span>
          </Button>
        </Stack>
      </div>
      <div className='profile-projects'>
        <ProjectCard
          title='Новый проект'
          description='Создать новый проект'
          usersNumber='?'
          date={dayjs().format('DD.MM.YYYY')}
          className='new_project_card'
        />
        {data.projects.map(({ title, description, progLangs, usersNumber, date }: Data['projects'][0], i) => (
          <ProjectCard
            title={title}
            description={description}
            progLangs={progLangs}
            usersNumber={usersNumber}
            date={date}
            className='own_project_card'
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
