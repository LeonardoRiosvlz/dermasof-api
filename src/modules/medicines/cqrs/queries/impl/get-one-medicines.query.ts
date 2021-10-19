import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneMedicinesQuery extends GetOneQuery<MedicinesEntity>{
  constructor(public request: GetOneDto<MedicinesEntity>) {
    super(request)
  }
}
