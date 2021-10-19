import { Result } from '../../../core/class/result';
import { UserEntity } from '../entities/user.entity';
import { Identifier } from '../../../core/interfaces/IEntity';
import { FilterableFieldsType } from '../../data-access/mongoose/types/filterable-fields.type';
import { RoleEntity } from '../modules/role/entities/role.entity';


export interface IUserService {
  validateUser(identifier: string, password: string): Promise<Result<Omit<UserEntity, 'password'>>>

  changePassword(userId: Identifier, oldPassword: string, newPassword: string): Promise<Result<void>>

  getUserByUserNmeOrEmail(unique: string): Promise<Result<UserEntity>>

  resetPassword(userId: Identifier, newPassword: string): Promise<Result<void>>

  getUserByConnection(where: FilterableFieldsType<UserEntity>, connection: unknown): Promise<Result<UserEntity>>

  getUserRolesById(roleId: Identifier): Promise<Result<Array<RoleEntity>>>

  getUserRolesByConnection(userId: Identifier, connection: unknown): Promise<Result<Array<RoleEntity>>>

}

export namespace IUserService {
  export const $ = Symbol('IUserService');
}