import './Projects.scss';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { ProgLangsEnum } from '../../../common/enums/ProgLangsEnum';
import Layout from '../../layout/Layout';

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
]
const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <div className='projects-search'>
          <Stack
            justifyContent='space-around'
            direction='row'>
            <form noValidate autoComplete="off" className='projects-searchBar'>
              <TextField id="search-bar" label="Название проекта" className='projects-searchBar-textField' />
            </form>
            <Stack
              justifyContent='right'
              gap='10px'
              direction='row'>
              <IconButton className='projects-buttons-filter'>
                <FilterAltIcon />
              </IconButton>
              <IconButton className='projects-buttons-search'>
                <SearchIcon />
              </IconButton>
            </Stack>
          </Stack>
        </div>
        <div className='projects-filters'>
          <Stack
            gap='25px'
            direction='column'>
            <Stack
              justifyContent='space-between'
              alignItems='center'
              gap='10px'
              direction='row'
              color='black'>
              <form noValidate autoComplete="off" className='projects-filters-minNumber'>
                <TextField id="min-members" label="минимум" className='projects-filters-minNumber' />
              </form>
              <div>до</div>
              <form noValidate autoComplete="off" className='projects-filters-maxNumber'>
                <TextField id="max-members" label="максимум-" className='projects-filters-maxNumber' />
              </form>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="До"
                  value={1}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  className='projects-filters-date-before'
                />
              </LocalizationProvider>
            </Stack>
            <Stack
              justifyContent='space-between'
              alignItems='center'
              gap='10px'
              direction='row'
              color='black'>
              <div>ЯП</div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="После"
                  value={1}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Stack>
          </Stack>
        </div>
        <div>проекты</div>
        <div>Пагинация</div>
      </div>
    </div>
  );
};

export default Projects;
