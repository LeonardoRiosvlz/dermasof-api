import { UserEntity } from '../entities/user.entity';
import { IRepositoryFactory } from '../../../core/interfaces/IRepositoryFactory';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';
import { Connection } from 'mongoose';

export type IUserRepositoryFactory = IRepositoryFactory<Connection, UserEntity, FilterableFieldsType<UserEntity>>;

export namespace IUserRepositoryFactory {
  export const $ = Symbol('IUserRepositoryFactory');
}