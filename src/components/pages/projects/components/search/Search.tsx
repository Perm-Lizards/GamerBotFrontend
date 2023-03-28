import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Input, Stack } from '@mui/material';

const Search = () => {
  return (
    <Stack
      justifyContent='space-between'
      direction='row'
      className='projects-top_part-search'
      gap='5px'>
      <Input
        placeholder='Название проекта'
        style={{ flexGrow: 1, color: 'white' }}
      />
      <Stack
        justifyContent='flex-end'
        alignItems='center'
        direction='row'>
        <IconButton className='projects-buttons-search'>
          <SearchIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Search;
