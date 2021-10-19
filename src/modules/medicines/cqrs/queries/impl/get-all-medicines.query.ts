import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllMedicinesQuery extends GetAllQuery<MedicinesEntity>{
  constructor(public request: GetAllDto<MedicinesEntity>) {
    super(request)
  }
}
