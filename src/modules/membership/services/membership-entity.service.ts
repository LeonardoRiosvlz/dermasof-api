import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { MembershipEntity } from '../entities/membership.entity';
import { MembershipRepository } from '../repositories/membership.repository';


@Injectable()
export class MembershipEntityService extends BaseEntityService<MembershipEntity> {
  constructor(private readonly _membershipRepo: MembershipRepository) {
    super(_membershipRepo, MembershipEntity.name);
  }




}
