import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllMedicinesQuery } from '../impl/get-all-medicines.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { MedicinesEntityService } from '../../../services/medicines-entity.service';

@QueryHandler(GetAllMedicinesQuery)
export class GetAllMedicinesQueryHandler extends GetAllQueryHandler<MedicinesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicinesEntityService.name)
  }

}
