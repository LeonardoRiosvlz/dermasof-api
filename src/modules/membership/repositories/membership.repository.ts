import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { MembershipEntity } from '../entities/membership.entity';

@Injectable()
export class MembershipRepository extends BaseRepository<MembershipEntity, FilterableFieldsType<MembershipEntity>> {
  constructor(
    @Inject(MembershipEntity.name) private readonly _membershipModel: Model<MembershipEntity>,
  ) {
    super(_membershipModel, MembershipRepository.name);
  }
}
