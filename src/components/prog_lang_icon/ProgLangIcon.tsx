import { useMemo } from 'react';

import { ProgLangsEnum } from '../../common/enums/ProgLangsEnum';
import { ProgLangsStaticUrl } from '../../common/static/prog_langs';

type Props = {
  width: number;
  height: number;
  progLang?: ProgLangsEnum;
  alt?: string;
};

const ProgLangIcon = ({ width, height, progLang, alt }: Props) => {
  const src = useMemo(() => (progLang ? ProgLangsStaticUrl[progLang] : ''), [progLang]);
  const backgroundColor = useMemo(() => (progLang ? '' : '#D9D9D9'), [progLang]);

  return (
    <img
      style={{ width, height, backgroundColor, borderRadius: '100%' }}
      src={src}
      alt={alt}
    />
  );
};

export default ProgLangIcon;
