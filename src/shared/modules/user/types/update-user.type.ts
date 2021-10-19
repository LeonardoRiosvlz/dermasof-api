import { UserEntity } from '../entities/user.entity';

export type UserUpdateType = Partial< Omit<UserEntity, 'email' | 'id' | 'lastLogin' | 'createdAt' | 'updatedAt' >>
