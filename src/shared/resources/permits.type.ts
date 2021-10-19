import { APP_MODULES } from './modules.enum';


export enum ACTION_LIST {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE_ONE = 'DELETE_ONE',
  DELETE_MANY = 'DELETE_MANY',
  GET_ALL = 'GET_ALL',
  GET_PAGINATED = 'GET_PAGINATED',
  GET_ONE = 'GET_ONE',

  USERS_GET_USER_PROFILE = 'USERS_GET_USER_PROFILE',

  FILES_GET_WRITE_SIGNED_URL = 'FILES_GET_WRITE_SIGNED_URL',
  FILES_CREATE_UPLOADED_FILE = 'FILES_CREATE_UPLOADED_FILE',

  TENANT_GET_CONNECTION = 'TENANT_GET_CONNECTION',

  TRANSCODER_TRANSCODER = 'TRANSCODER_TRANSCODER'
}

export type PermitsType = {
  module: APP_MODULES,
  action: ACTION_LIST
}


/*export type PermitsType2<T> = {
  module: APP_MODULES,
  action: T
}

enum TENANTS{
  A= 'A',
  B= 'B'
}

export const Animals = { ACTION_LIST, TENANTS };
export type Animals = typeof Animals;

type COMBINED = (typeof ACTION_LIST) & (typeof TENANTS);


// @ts-ignore
const a: PermitsType2<COMBINED> = { module: APP_MODULES.TENANTS, action: ACTION_LIST.GET_ALL };

console.log(a.action)


//const a: PermitsType = { module: APP_MODULES.TENANTS, action:ACTION_LIST.TENANT_GET_CONNECTION };*/

