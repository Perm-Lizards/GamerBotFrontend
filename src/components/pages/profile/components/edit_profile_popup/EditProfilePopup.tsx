import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, Stack, TextareaAutosize, TextField } from '@mui/material';
import _ from 'lodash';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { ProgLangsEnum } from '../../../../../common/enums/ProgLangsEnum';
import Popup from '../../../../popup/Popup';
import SelectProgLangsPopup from '../../../../select_prog_langs_popup/SelectProgLangsPopup';

const user = {
  telegram: 'link',
  github: 'link',
  progLangs: [ProgLangsEnum.JavaScript] as ProgLangsEnum[],
  description: 'Какое-то описание',
};

const EditProfilePopup = () => {
  const [open, setOpen] = useState(false);
  const [progLangs, setProgLangs] = useState([] as ProgLangsEnum[]);
  const [telegram, setTelegram] = useState('');
  const [github, setGithub] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (open) {
      setProgLangs(user.progLangs);
      setTelegram(user.telegram);
      setGithub(user.github);
      setDescription(user.description);
    }
  }, [open]);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSave = useCallback(() => {
    const newUser = {
      ..._.cloneDeep(user),
      progLangs,
      telegram,
      github,
      description,
    };

    if (!_.isEqual(newUser, user)) {
      // TODO Отправка запроса
    }

    setOpen(false);
  }, [description, github, progLangs, telegram]);

  const onChangeProgLangs = (newProgLangs: ProgLangsEnum[]) => setProgLangs(newProgLangs);

  const onChangeTelegram = (e: ChangeEvent<HTMLInputElement>) => setTelegram(e.target.value);

  const onChangeGithub = (e: ChangeEvent<HTMLInputElement>) => setGithub(e.target.value);

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

  return (
    <>
      <IconButton onClick={onOpen}>
        <EditIcon />
      </IconButton>
      <Popup
        fullWidth={true}
        open={open}
        onClose={onClose}
        className='edit_profile_popup'
        title='Редактирование профиля'>
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

export default EditProfilePopup;
