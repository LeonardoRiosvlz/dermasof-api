import { QueryHandler } from '@nestjs/cqrs';
import { GetOneUserQuery } from '../impl/get-one-user.query';
import {  ModuleRef } from '@nestjs/core';

import { UserEntity } from '../../../entities/user.entity';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { UserService } from '../../../services/user.service';

@QueryHandler(GetOneUserQuery)
export class GetOneUserQueryHandler extends GetOneQueryHandler<UserEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, UserService.name)
  }

}