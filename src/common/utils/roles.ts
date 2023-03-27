import { RolesEnum } from '../enums/RolesEnum';

type RolesTexts = {
  [key in RolesEnum]: string;
};

type RolesValues = {
  [key in RolesEnum]: number;
};

export const rolesTexts = {
  [RolesEnum.ADMIN]: 'администратор',
  [RolesEnum.PROJECT_OWNER]: 'владелец',
  [RolesEnum.PROJECT_ADMIN]: 'админ',
  [RolesEnum.PROJECT_MEMBER]: 'участник',
  [RolesEnum.GUEST]: 'гость',
} as RolesTexts;

export const rolesValues = {
  [RolesEnum.ADMIN]: 999,
  [RolesEnum.PROJECT_OWNER]: 3,
  [RolesEnum.PROJECT_ADMIN]: 2,
  [RolesEnum.PROJECT_MEMBER]: 1,
  [RolesEnum.GUEST]: 0,
} as RolesValues;
