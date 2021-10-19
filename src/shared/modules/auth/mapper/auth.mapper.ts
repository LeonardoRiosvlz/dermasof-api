import { AuthUser } from '../types/auth-user.type';
import { UserEntity } from '../../user/entities/user.entity';
import { RoleEntity } from '../../user/modules/role/entities/role.entity';
import { FilesEntity } from '../../files/entities/files.entity';

export class AuthMapper {

  public static entityToAuthUser(
    userEntity: Omit<UserEntity, 'password'> | UserEntity,
    userRoles?: Array<RoleEntity>,
    avatarFile?: FilesEntity,
  ): AuthUser {
    return {
      userId: userEntity.id,
      email: userEntity.email,
      firstname: userEntity.firstname,
      lastname: userEntity.lastname,
      isActive: userEntity.isActive ?? false,
      isAdmin: userEntity.isAdmin ?? true,
      roles: userRoles ? userRoles.map(({ id, name, permits }) => {
        return {
          id,
          name,
          permits,
        };
      }) : [],
      username: userEntity.username,
      verified: userEntity.verified,
      avatarFile: avatarFile ? { id: avatarFile.id, key: avatarFile.key, url: avatarFile.url } : undefined,
    };
  }
}