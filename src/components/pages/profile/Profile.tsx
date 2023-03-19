import './Profile.scss';

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button } from '@mui/material';
import dayjs from 'dayjs';

import { ProgLangs } from '../../../common/types/ProgLangs';
import ProjectCard from '../../project_card/ProjectCard';

const data = {
  telegram: 'link',
  github: 'link',
  projects: [
    {
      title: 'Взлом жепы',
      description: 'Мы собираем команду для взлома жопы',
      progLangs: [ProgLangs.C, ProgLangs.Go, ProgLangs.TypeScript] as ProgLangs[],
      usersNumber: 1,
      date: dayjs().format('DD.MM.YYYY'),
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
              <span>Очень длинная строка прям ну вообще помогити</span>
              <span>Очень длинная строка прям ну вообще помогити</span>
            </div>
          </div>
          <div className='profile-info-top_part-logo'>
            <img
              src=''
              alt=''
            />
          </div>
          <div className='profile-info-top_part-prog_langs'>
            <span>prog_langs</span>
          </div>
        </div>
        <div className='profile-info-description'>kek</div>
        <div className='profile-info-buttons'>
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
        </div>
      </div>
      <div className='profile-projects'>
        {data.projects.map(({ title, description, progLangs, usersNumber, date }: Data['projects'][0], i) => (
          <ProjectCard
            title={title}
            description={description}
            progLangs={progLangs}
            usersNumber={usersNumber}
            date={date}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
