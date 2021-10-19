import { IFixture } from '../../interfaces/IFixture';
import { UserEntity, UserFeature } from '../../../user/entities/user.entity';
import { ModelDefinition } from '@nestjs/mongoose';
import { UniqueEntityID } from '../../../data-access/mongoose/UniqueEntityID';
import { Gender } from '../../../user/entities/schemas/profile.schema';
import PasswordUtils from 'src/shared/utils/password.utils';


export const userFixture: IFixture<UserEntity, ModelDefinition> = {
  target: 'both',
  feature: UserFeature,
  entities: [
    {
      id: new UniqueEntityID().toString(),
      email: 'dariel87@gmail.com',
      username: 'xdariel',
      firstname: 'Dariel',
      lastname: 'Noa',
      password: PasswordUtils.hashPassword('Admin@123'),
      isActive: true,
      isAdmin: true,
      verified: true,
      roles: [],
      profile: {
        address: 'Calle 31, e44 y 46',
        birthDay: '1987-01-12',
        country: 'Cuba',
        gender: Gender.MALE,
        state: 'Artemisa',
        zipCode: '33800',
      },
    },
    {
      id: new UniqueEntityID().toString(),
      email: 'gabriel@bioscenter.com.co',
      username: 'gabriel',
      firstname: 'Gabriel',
      lastname: 'Ureña',
      password: PasswordUtils.hashPassword('Admin@123'),
      isActive: true,
      isAdmin: true,
      verified: true,
      roles: [],
      profile: {
        country: 'Colombia',
        gender: Gender.MALE,
      },
    },

    {
      id: new UniqueEntityID().toString(),
      email: 'leonardo27188@gmail.com',
      username: 'leo',
      firstname: 'Leonardo',
      lastname: 'Rios',
      password: PasswordUtils.hashPassword('Admin@123'),
      isActive: true,
      isAdmin: true,
      verified: true,
      roles: [],
      profile: {
        country: 'Colombia',
        gender: Gender.MALE,
      },
    },
  ],
};