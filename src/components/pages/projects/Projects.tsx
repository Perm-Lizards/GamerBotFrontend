import './Projects.scss';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack } from '@mui/material';

import Layout from '../../layout/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <div className='projects-search'>
          <Stack
            justifyContent={'right'}
            spacing={1}
            direction='row'>
            <IconButton className='profiles-buttons-filter'>
              <FilterAltIcon />
            </IconButton>
            <IconButton className='profiles-buttons-search'>
              <SearchIcon />
            </IconButton>
          </Stack>
        </div>
      </div>
    </Layout >
  );
};

export default Projects;
