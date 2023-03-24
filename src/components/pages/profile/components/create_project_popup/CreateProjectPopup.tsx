import AddIcon from '@mui/icons-material/Add';
import { Button, Fab, TextareaAutosize, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import { ChangeEvent, useState } from 'react';

import { ProgLangsEnum } from '../../../../../common/enums/ProgLangsEnum';
import Popup from '../../../../popup/Popup';
import SelectProgLangsPopup from '../../../../select_prog_langs_popup/SelectProgLangsPopup';

const CreateProjectPopup = () => {
  const [open, setOpen] = useState(false);
  const [progLangs, setProgLangs] = useState([] as ProgLangsEnum[]);
  const [telegram, setTelegram] = useState('');
  const [github, setGithub] = useState('');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');

  const onOpen = () => {
    setProgLangs([] as ProgLangsEnum[]);
    setTelegram('');
    setGithub('');
    setProjectName('');
    setDescription('');
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  const onCreate = () => {
    onClose();
  };

  const onChangeProgLangs = (newProgLangs: ProgLangsEnum[]) => setProgLangs(newProgLangs);

  const onChangeTelegram = (e: ChangeEvent<HTMLInputElement>) => setTelegram(e.target.value);

  const onChangeGithub = (e: ChangeEvent<HTMLInputElement>) => setGithub(e.target.value);

  const onChangeProjectName = (e: ChangeEvent<HTMLInputElement>) => setProjectName(e.target.value);

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  return (
    <>
      <Fab
        style={{
          position: 'absolute',
          bottom: '21px',
          right: '20px',
        }}
        size='medium'
        color='primary'
        aria-label='add'
        onClick={onOpen}>
        <AddIcon />
      </Fab>
      <Popup
        open={open}
        onClose={onClose}
        fullWidth={true}
        title='Создание проекта'>
        <Stack gap={2}>
          <SelectProgLangsPopup
            progLangs={progLangs}
            onChange={onChangeProgLangs}
          />
          <TextField
            label='Ссылка на telegram'
            variant='outlined'
            value={telegram}
            onChange={onChangeTelegram}
          />
          <TextField
            label='Ссылка на github'
            variant='outlined'
            value={github}
            onChange={onChangeGithub}
          />
          <TextField
            label='Название'
            variant='outlined'
            value={projectName}
            onChange={onChangeProjectName}
          />
          <TextareaAutosize
            minRows={5}
            maxRows={5}
            placeholder='Описание'
            value={description}
            onChange={onChangeDescription}
            style={{ resize: 'none', width: '100%' }}
          />
          <Stack
            justifyContent='space-between'
            direction='row'>
            <Button
              color='error'
              variant='contained'
              onClick={onClose}>
              Отмена
            </Button>
            <Button
              color='success'
              variant='contained'
              onClick={onCreate}>
              Создать
            </Button>
          </Stack>
        </Stack>
      </Popup>
    </>
  );
};

export default CreateProjectPopup;
