import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { OfficeEntity } from '../entities/office.entity';

@Injectable()
export class OfficeRepository extends BaseRepository<OfficeEntity, FilterableFieldsType<OfficeEntity>> {
  constructor(
    @Inject(OfficeEntity.name) private readonly _officeModel: Model<OfficeEntity>,
  ) {
    super(_officeModel, OfficeRepository.name);
  }
}
