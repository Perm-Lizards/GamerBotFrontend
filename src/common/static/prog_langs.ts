import { ProgLangsEnum } from '../enums/ProgLangsEnum';
import C from './prog_langs/C.svg';
import CPP from './prog_langs/CPP.svg';
import CS from './prog_langs/CS.svg';
import Go from './prog_langs/Go.svg';
import Haskell from './prog_langs/Haskell.svg';
import Java from './prog_langs/Java.svg';
import JavaScript from './prog_langs/JavaScript.svg';
import Julia from './prog_langs/Julia.svg';
import Kotlin from './prog_langs/Kotlin.svg';
import Lisp from './prog_langs/Lisp.svg';
import Lua from './prog_langs/Lua.svg';
import Php from './prog_langs/Php.svg';
import Python from './prog_langs/Python.svg';
import Ruby from './prog_langs/Ruby.svg';
import Rust from './prog_langs/Rust.svg';
import TypeScript from './prog_langs/TypeScript.svg';

type ProgLangsStaticUrlType = {
  [key in ProgLangsEnum]: string;
};

export const ProgLangsStaticUrl: ProgLangsStaticUrlType = {
  [ProgLangsEnum.JavaScript]: JavaScript,
  [ProgLangsEnum.TypeScript]: TypeScript,
  [ProgLangsEnum.Python]: Python,
  [ProgLangsEnum.Go]: Go,
  [ProgLangsEnum.C]: C,
  [ProgLangsEnum['C++']]: CPP,
  [ProgLangsEnum['C#']]: CS,
  [ProgLangsEnum.Ruby]: Ruby,
  [ProgLangsEnum.Java]: Java,
  [ProgLangsEnum.Lua]: Lua,
  [ProgLangsEnum.Lisp]: Lisp,
  [ProgLangsEnum.Haskell]: Haskell,
  [ProgLangsEnum.Rust]: Rust,
  [ProgLangsEnum.Kotlin]: Kotlin,
  [ProgLangsEnum.Php]: Php,
  [ProgLangsEnum.Julia]: Julia,
};
