import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { InformedConsentEntity } from '../entities/informed-consent.entity';

@Injectable()
export class InformedConsentRepository extends BaseRepository<InformedConsentEntity, FilterableFieldsType<InformedConsentEntity>> {
  constructor(
    @Inject(InformedConsentEntity.name) private readonly _informedConsentModel: Model<InformedConsentEntity>,
  ) {
    super(_informedConsentModel, InformedConsentRepository.name);
  }
}
