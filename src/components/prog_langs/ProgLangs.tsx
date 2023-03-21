import HelpIcon from '@mui/icons-material/Help';
import { Stack } from '@mui/system';
import { useMemo } from 'react';

import { ProgLangsEnum } from '../../common/enums/ProgLangsEnum';
import ProgLangIcon from '../prog_lang_icon/ProgLangIcon';

type Props = {
  width: number;
  height: number;
  onClick?: () => void;
  progLangs?: ProgLangsEnum[];
  justifyContent?: 'flex-start' | 'flex-end';
};

const ProgLangs = ({ width, height, progLangs, justifyContent, onClick }: Props) => {
  const renderProgLangs = useMemo(
    () =>
      progLangs && progLangs.length > 0 ? (
        progLangs.map((v, i) => (
          <ProgLangIcon
            key={i}
            width={width}
            height={height}
            progLang={v}
          />
        ))
      ) : (
        <HelpIcon style={{ fontSize: width }} />
      ),
    [height, progLangs, width]
  );

  return (
    <Stack
      gap={1}
      justifyContent={justifyContent ?? 'flex-start'}
      direction='row'
      onClick={onClick}>
      {renderProgLangs}
    </Stack>
  );
};

export default ProgLangs;
