import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

import { ProgLangsEnum } from '../../../../../common/enums/ProgLangsEnum';
import SelectProgLangsPopup from '../../../../select_prog_langs_popup/SelectProgLangsPopup';

type SortByDateType = 'new' | 'old';

const Filter = () => {
  const [sortByDate, setSortByDate] = useState('' as SortByDateType);
  const [progLangs, setProgLangs] = useState([] as ProgLangsEnum[]);

  const onChangeSortByDate = (_: React.MouseEvent<HTMLElement>, newSortByDate: SortByDateType) => setSortByDate(newSortByDate);

  const onChangeProgLangs = (newProgLangs: ProgLangsEnum[]) => setProgLangs(newProgLangs);

  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      className='projects-top_part-filter'>
      <ToggleButtonGroup
        exclusive
        value={sortByDate}
        onChange={onChangeSortByDate}>
        <ToggleButton
          className='projects-top_part-filter-button'
          value={'new' as SortByDateType}
          color='primary'>
          Новые
        </ToggleButton>
        <ToggleButton
          className='projects-top_part-filter-button'
          value={'old' as SortByDateType}
          color='secondary'>
          Старые
        </ToggleButton>
      </ToggleButtonGroup>
      <SelectProgLangsPopup
        width={30}
        progLangs={progLangs}
        onChange={onChangeProgLangs}
      />
    </Stack>
  );
};

export default Filter;
