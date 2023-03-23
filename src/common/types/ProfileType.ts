import { ProgLangsEnum } from '../enums/ProgLangsEnum';
import { ProjectType } from './ProjectType';

export type ProfileType = {
  github: string;
  telegram: string;
  username: string;
  description: string;
  progLangs: ProgLangsEnum[];
  isOwner: boolean;
  projects: ProjectType[];
};
