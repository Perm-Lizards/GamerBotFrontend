import './MemberCard.scss';

import { Avatar, Stack } from '@mui/material';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileType } from '../../../../../common/types/ProfileType';
import ProgLangs from '../../../../prog_langs/ProgLangs';
import EditMemberPopup from '../edit_member_popup/EditMemberPopup';

type Props = {
  member: ProfileType;
  roleText: string;
  showEditMember: boolean;
  isDemo?: boolean;
};

const MemberCard = ({ member: { id, username, progLangs }, roleText, showEditMember, isDemo }: Props) => {
  const navigate = useNavigate();

  const renderEditMember = useMemo(
    () =>
      showEditMember && (
        <EditMemberPopup
          member={{ username, progLangs }}
          roleText={roleText}
        />
      ),
    [progLangs, roleText, showEditMember, username]
  );

  const onClick = useCallback(() => {
    if (!isDemo) {
      navigate(`/profile/${id}`);
    }
  }, [id, isDemo, navigate]);

  return (
    <Stack
      direction='row'
      className='member_card'>
      <Stack
        direction='row'
        justifyContent='space-between'
        className='member_card-info'
        onClick={onClick}>
        <Stack
          gap='5px'
          direction='row'>
          <Stack>
            <Avatar />
          </Stack>
          <Stack gap='2px'>
            <span className='member_card-info-title'>{username}</span>
            <span className='member_card-info-description'>{roleText}</span>
          </Stack>
        </Stack>
        <Stack>
          <ProgLangs
            width={25}
            height={25}
            progLangs={progLangs}
            justifyContent='flex-end'
          />
        </Stack>
      </Stack>
      {renderEditMember}
    </Stack>
  );
};

export default MemberCard;
