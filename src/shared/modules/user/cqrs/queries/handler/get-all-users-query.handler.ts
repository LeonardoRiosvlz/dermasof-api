import { QueryHandler } from '@nestjs/cqrs';
import { GetAllUsersQuery } from '../impl/get-all-users.query';
import { ModuleRef } from '@nestjs/core';
import { UserEntity } from '../../../entities/user.entity';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { UserService } from '../../../services/user.service';


@QueryHandler(GetAllUsersQuery)
export class GetAllUsersQueryHandler extends GetAllQueryHandler<UserEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserService.name)
  }

}
