import { Avatar, Stack } from '@mui/material';

import { ProgLangsEnum } from '../../../../../common/enums/ProgLangsEnum';
import { RolesEnum } from '../../../../../common/enums/RolesEnum';

const member = {
  username: 'Имя',
  progLangs: [] as ProgLangsEnum[],
  role: RolesEnum.PROJECT_MEMBER,
};

const MemberCard = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'>
      <Stack gap='5px'>
        <Stack>
          <Avatar />
        </Stack>
        <Stack>
          <span className='project_card-title'>{member.username}</span>
          <span className='project_card-description'>{member.role}</span>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MemberCard;
