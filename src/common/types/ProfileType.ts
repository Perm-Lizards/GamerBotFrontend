import { ProgLangsEnum } from '../enums/ProgLangsEnum';
import { RolesEnum } from '../enums/RolesEnum';
import { ProjectType } from './ProjectType';

export type ProfileType = {
  id?: number;
  github?: string;
  telegram?: string;
  username?: string;
  description?: string;
  progLangs?: ProgLangsEnum[];
  isOwner?: boolean;
  projects?: ProjectType[];
  role?: RolesEnum;
};
