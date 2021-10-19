import { IFixture } from '../../interfaces/IFixture';
import { ModelDefinition } from '@nestjs/mongoose';
import { UniqueEntityID } from '../../../data-access/mongoose/UniqueEntityID';
import { RoleEntity, RoleFeature } from '../../../user/modules/role/entities/role.entity';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';


export const rolesFixture: IFixture<RoleEntity, ModelDefinition> = {
  target: 'both',
  feature: RoleFeature,
  entities: [
    {
      id: new UniqueEntityID().toString(),
      name: 'User-Admin',
      description: 'Users module administrator',
      permits: [
        {
          module: APP_MODULES.USERS,
          action: ACTION_LIST.CREATE,
        },

        {
          module: APP_MODULES.USERS,
          action: ACTION_LIST.GET_ALL,
        },

        {
          module: APP_MODULES.USERS,
          action: ACTION_LIST.GET_PAGINATED,
        },

        {
          module: APP_MODULES.USERS,
          action: ACTION_LIST.GET_ONE,
        },
        {
          module: APP_MODULES.USERS,
          action: ACTION_LIST.UPDATE,
        },

        {
          module: APP_MODULES.USERS,
          action: ACTION_LIST.DELETE_ONE,
        },
      ],
    }

  ],
};