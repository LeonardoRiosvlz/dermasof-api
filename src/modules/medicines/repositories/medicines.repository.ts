import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { MedicinesEntity } from '../entities/medicines.entity';

@Injectable()
export class MedicinesRepository extends BaseRepository<MedicinesEntity, FilterableFieldsType<MedicinesEntity>> {
  constructor(
    @Inject(MedicinesEntity.name) private readonly _medicinesModel: Model<MedicinesEntity>,
  ) {
    super(_medicinesModel, MedicinesRepository.name);
  }
}
