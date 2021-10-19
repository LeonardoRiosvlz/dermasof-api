import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedMedicinesQuery } from '../impl/get-paginated-medicines.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { MedicinesEntityService } from '../../../services/medicines-entity.service';

@QueryHandler(GetPaginatedMedicinesQuery)
export class GetPaginatedMedicinesQueryHandler extends GetPaginatedQueryHandler<MedicinesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicinesEntityService.name)
  }

}
