import { Avatar, AvatarGroup, Button, Stack } from '@mui/material';
import { useMemo, useState } from 'react';

import { ProgLangsEnum } from '../../../../../common/enums/ProgLangsEnum';
import { RolesEnum } from '../../../../../common/enums/RolesEnum';
import { ProfileType } from '../../../../../common/types/ProfileType';
import { rolesTexts, rolesValues } from '../../../../../common/utils/roles';
import Popup from '../../../../popup/Popup';
import MemberCard from '../member_card/MemberCard';

const members = [
  {
    id: 1,
    username: 'member_1',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 2,
    username: 'member_2',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 3,
    username: 'member_3',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 4,
    username: 'member_4',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 5,
    username: 'member_5',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 6,
    username: 'member_6',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 7,
    username: 'member_7',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 8,
    username: 'member_8',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 9,
    username: 'member_9',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_ADMIN,
  },
  {
    id: 10,
    username: 'member_10',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 11,
    username: 'member_11',
    progLangs: [ProgLangsEnum.C, ProgLangsEnum.Go],
    role: RolesEnum.PROJECT_OWNER,
  },
  {
    id: 12,
    username: 'member_12',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 13,
    username: 'member_13',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 14,
    username: 'member_14',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
  {
    id: 15,
    username: 'member_15',
    progLangs: [ProgLangsEnum.TypeScript, ProgLangsEnum.Rust],
    role: RolesEnum.PROJECT_MEMBER,
  },
] as ProfileType[];

const profile = {
  role: RolesEnum.PROJECT_ADMIN,
} as ProfileType;

const ViewMemberPopup = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => setOpen(false);

  const renderMembers = useMemo(
    () =>
      members.map((v, i) => (
        <MemberCard
          key={i}
          member={v}
          roleText={rolesTexts[v.role as RolesEnum]}
          showEditMember={rolesValues[profile.role as RolesEnum] > rolesValues[v.role as RolesEnum]}
        />
      )),
    []
  );

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
        onClose={onClose}
        title='Участники проекта'>
        <Stack gap={2}>
          <div style={{ height: 400, overflow: 'scroll' }}>
            <Stack
              gap='5px'
              padding='0 10px'>
              {renderMembers}
            </Stack>
          </div>
          <Stack
            justifyContent='flex-end'
            direction='row'>
            <Button
              color='error'
              variant='contained'
              onClick={onClose}>
              Закрыть
            </Button>
          </Stack>
        </Stack>
      </Popup>
    </>
  );
};

export default ViewMemberPopup;
