import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllMembershipQuery } from '../impl/get-all-membership.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { MembershipEntity } from '../../../entities/membership.entity';
import { MembershipEntityService } from '../../../services/membership-entity.service';

@QueryHandler(GetAllMembershipQuery)
export class GetAllMembershipQueryHandler extends GetAllQueryHandler<MembershipEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MembershipEntityService.name)
  }

}
