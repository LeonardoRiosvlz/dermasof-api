import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneMembershipQuery } from '../impl/get-one-membership.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { MembershipEntity } from '../../../entities/membership.entity';
import { MembershipEntityService } from '../../../services/membership-entity.service';

@QueryHandler(GetOneMembershipQuery)
export class GetOneMembershipQueryHandler extends GetOneQueryHandler<MembershipEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MembershipEntityService.name)
  }
}

