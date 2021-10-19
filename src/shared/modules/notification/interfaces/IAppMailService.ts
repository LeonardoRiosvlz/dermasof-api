import { IMailData } from './IMailData';
import { Result } from 'src/shared/core/class/result';

export interface IAppMailService {
  send(to: string, data: IMailData): Promise<Result<void>>
}

export namespace IAppMailService {
  export const $ = Symbol('IAppMailService');
}