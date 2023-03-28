import './Projects.scss';

import { Pagination, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import { ProgLangsEnum } from '../../../common/enums/ProgLangsEnum';
import { ProjectType } from '../../../common/types/ProjectType';
import ProjectCard from '../../project_card/ProjectCard';
import Filter from './components/filter/Filter';
import Search from './components/search/Search';

const projects = [
  {
    id: 1,
    title: 'Проект 1',
    description: 'Описание к проекту 1',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
    usersNumber: 1,
    createdAt: dayjs().format('DD.MM.YYYY'),
  },
  {
    id: 2,
    title: 'Проект 2',
    description: 'Описание к проекту 2',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
    usersNumber: 1,
    createdAt: dayjs().subtract(1, 'day').format('DD.MM.YYYY'),
  },
  {
    id: 3,
    title: 'Проект 3',
    description: 'Описание к проекту 3',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
    usersNumber: 1,
    createdAt: dayjs().subtract(2, 'day').format('DD.MM.YYYY'),
  },
  {
    id: 4,
    title: 'Проект 4',
    description: 'Описание к проекту 4',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
    usersNumber: 1,
    createdAt: dayjs().subtract(3, 'day').format('DD.MM.YYYY'),
  },
  {
    id: 5,
    title: 'Проект 5',
    description: 'Описание к проекту 5',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
    usersNumber: 1,
    createdAt: dayjs().subtract(4, 'day').format('DD.MM.YYYY'),
  },
  {
    id: 6,
    title: 'Проект 6',
    description: 'Описание к проекту 6',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go, ProgLangsEnum.TypeScript] as ProgLangsEnum[],
    usersNumber: 1,
    createdAt: dayjs().subtract(5, 'day').format('DD.MM.YYYY'),
  },
] as ProjectType[];

const Projects = () => {
  const renderProjects = useMemo(
    () =>
      projects.map((v, i) => (
        <ProjectCard
          project={v}
          key={i}
        />
      )),
    []
  );

  return (
    <Stack
      className='projects'
      gap='5px'>
      <Stack
        className='projects-top_part'
        gap='5px'>
        <Search />
        <Filter />
      </Stack>
      <Stack className='projects-list'>
        <Stack gap='5px'>{renderProjects}</Stack>
      </Stack>
      <Pagination
        count={10}
        color='primary'
        size='large'
        className='projects-pagination'
      />
    </Stack>
  );
};

export default Projects;
