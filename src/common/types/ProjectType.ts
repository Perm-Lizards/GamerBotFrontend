import { ProgLangsEnum } from '../enums/ProgLangsEnum';

export type ProjectType = {
  id?: number;
  github?: string;
  telegram?: string;
  title?: string;
  description?: string;
  progLangs?: ProgLangsEnum[];
  usersNumber?: number;
  createdAt?: string;
};
