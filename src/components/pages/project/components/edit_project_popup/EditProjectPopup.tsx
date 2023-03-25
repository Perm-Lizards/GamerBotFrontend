import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, Stack, TextareaAutosize, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import { ProgLangsEnum } from '../../../../../common/enums/ProgLangsEnum';
import { ProjectType } from '../../../../../common/types/ProjectType';
import Popup from '../../../../popup/Popup';
import SelectProgLangsPopup from '../../../../select_prog_langs_popup/SelectProgLangsPopup';

type Props = {
  project: ProjectType;
};

const EditProjectPopup = ({ project }: Props) => {
  const [open, setOpen] = useState(false);
  const [progLangs, setProgLangs] = useState([] as ProgLangsEnum[]);
  const [telegram, setTelegram] = useState('');
  const [github, setGithub] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onOpen = () => {
    setProgLangs(project.progLangs ?? []);
    setTelegram(project.telegram ?? '');
    setGithub(project.github ?? '');
    setTitle(project.title ?? '');
    setDescription(project.description ?? '');
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  const onSave = () => {
    onClose();
  };

  const onChangeProgLangs = (newProgLangs: ProgLangsEnum[]) => setProgLangs(newProgLangs);

  const onChangeTelegram = (e: ChangeEvent<HTMLInputElement>) => setTelegram(e.target.value);

  const onChangeGithub = (e: ChangeEvent<HTMLInputElement>) => setGithub(e.target.value);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  return (
    <>
      <IconButton onClick={onOpen}>
        <EditIcon />
      </IconButton>
      <Popup
        fullWidth={true}
        open={open}
        onClose={onClose}>
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
            value={title}
            onChange={onChangeTitle}
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

export default EditProjectPopup;
