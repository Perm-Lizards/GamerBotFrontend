import EditIcon from '@mui/icons-material/Edit';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import { ProfileType } from '../../../../../common/types/ProfileType';
import Popup from '../../../../popup/Popup';
import MemberCard from '../member_card/MemberCard';

type Props = {
  member: ProfileType;
  roleText: string;
};

const EditMemberPopup = ({ member, roleText }: Props) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  const onSave = () => {
    onClose();
  };

  const onUpgrade = () => {
    // Logic
  };

  const onDowngrade = () => {
    // Logic
  };

  const onExclude = () => {
    // Logic
  };

  return (
    <>
      <Stack
        justifyContent='center'
        className='member_card-edit'
        onClick={onOpen}>
        <EditIcon style={{ fontSize: 20 }} />
      </Stack>
      <Popup
        fullWidth={true}
        open={open}
        onClose={onClose}
        title='Редактирование участника проекта'>
        <Stack gap={2}>
          <MemberCard
            member={member}
            roleText={roleText}
            showEditMember={false}
            isDemo={true}
          />
          <Stack
            direction='row'
            justifyContent='space-between'>
            <Stack gap='5px'>
              <Button
                color='success'
                variant='contained'
                onClick={onUpgrade}>
                Повысить
              </Button>
              <Button
                color='error'
                variant='contained'
                onClick={onDowngrade}>
                Понизить
              </Button>
              <Button
                color='error'
                variant='contained'
                onClick={onExclude}>
                Исключить
              </Button>
            </Stack>
            <Stack gap='5px'>
              <Button
                color='success'
                variant='contained'
                onClick={onSave}>
                Сохранить
              </Button>
              <Button
                color='error'
                variant='contained'
                onClick={onClose}>
                Закрыть
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Popup>
    </>
  );
};

export default EditMemberPopup;
