import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedMembershipQuery } from '../impl/get-paginated-membership.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { MembershipEntity } from '../../../entities/membership.entity';
import { MembershipEntityService } from '../../../services/membership-entity.service';

@QueryHandler(GetPaginatedMembershipQuery)
export class GetPaginatedMembershipQueryHandler extends GetPaginatedQueryHandler<MembershipEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MembershipEntityService.name)
  }

}
