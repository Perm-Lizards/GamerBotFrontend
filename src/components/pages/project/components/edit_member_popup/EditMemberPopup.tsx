import { Avatar, AvatarGroup, Button, Stack } from '@mui/material';
import { useState } from 'react';

import Popup from '../../../../popup/Popup';

const EditMemberPopup = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  const onSave = () => {
    onClose();
  };

  return (
    <>
      <AvatarGroup
        max={4}
        onClick={onOpen}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
      <Popup
        fullWidth={true}
        open={open}
        onClose={onClose}>
        <Stack>
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

export default EditMemberPopup;
