export enum PROVIDER {
  LOCAL = 'local',
  GOOGLE = 'google'
}

export type SignInDto = {
  unique: string;
  password?: string;
  tokenId?: string;
  provider: PROVIDER;
}
