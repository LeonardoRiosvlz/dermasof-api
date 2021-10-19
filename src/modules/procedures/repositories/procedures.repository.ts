import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ProceduresEntity } from '../entities/procedures.entity';

@Injectable()
export class ProceduresRepository extends BaseRepository<ProceduresEntity, FilterableFieldsType<ProceduresEntity>> {
  constructor(
    @Inject(ProceduresEntity.name) private readonly _proceduresModel: Model<ProceduresEntity>,
  ) {
    super(_proceduresModel, ProceduresRepository.name);
  }
}
