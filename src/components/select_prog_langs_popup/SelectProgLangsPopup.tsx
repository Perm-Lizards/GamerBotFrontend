import './SelectProgLangsPopup.scss';

import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { ProgLangsEnum } from '../../common/enums/ProgLangsEnum';
import Popup from '../popup/Popup';
import ProgLangIcon from '../prog_lang_icon/ProgLangIcon';
import ProgLangs from '../prog_langs/ProgLangs';

type Props = {
  progLangs: ProgLangsEnum[];
  onChange: (v: ProgLangsEnum[]) => void;
};

const SelectProgLangsPopup = ({ progLangs, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedProgLangs, setSelectedProgLangs] = useState([] as ProgLangsEnum[]);

  useEffect(() => {
    if (open) {
      setSelectedProgLangs(progLangs);
    }
  }, [open, progLangs]);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSave = useCallback(() => {
    onChange(selectedProgLangs);
    setOpen(false);
  }, [onChange, selectedProgLangs]);

  const onSelect = useCallback(
    (progLang: ProgLangsEnum) => {
      let newProgLangs = [...selectedProgLangs];

      if (newProgLangs.includes(progLang)) {
        newProgLangs = newProgLangs.filter(v => v !== progLang);
      } else {
        if (newProgLangs.length >= 3) return;

        newProgLangs.push(progLang);
      }

      setSelectedProgLangs(newProgLangs);
    },
    [selectedProgLangs]
  );

  const renderProgLangsGrid = useMemo(
    () =>
      (Object.keys(ProgLangsEnum) as Array<ProgLangsEnum>).map((v, i) => (
        <div key={i}>
          <div
            className='prog_langs_icons-item'
            style={{ backgroundColor: selectedProgLangs.includes(v) ? '#35babc' : '' }}
            onClick={() => onSelect(v)}>
            <ProgLangIcon
              width={50}
              height={50}
              progLang={v}
            />
          </div>
        </div>
      )),
    [onSelect, selectedProgLangs]
  );

  return (
    <>
      <div style={{ display: 'flex' }}>
        <ProgLangs
          width={50}
          height={50}
          progLangs={progLangs}
          onClick={onOpen}
        />
      </div>
      <Popup
        fullWidth={true}
        open={open}
        onClose={onClose}
        title='Выбор языков программирования'>
        <Stack gap={2}>
          <Stack
            gap={1}
            direction='row'
            flexWrap='wrap'
            className='prog_langs_icons'>
            {renderProgLangsGrid}
          </Stack>
          <Stack
            justifyContent='space-between'
            direction='row'>
            <Button
              color='error'
              variant='contained'
              onClick={onClose}>
              Закрыть
            </Button>
            <Button
              color='success'
              variant='contained'
              onClick={onSave}>
              Сохранить
            </Button>
          </Stack>
        </Stack>
      </Popup>
    </>
  );
};

export default SelectProgLangsPopup;
