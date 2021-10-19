import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneMedicinesQuery } from '../impl/get-one-medicines.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { MedicinesEntity } from '../../../entities/medicines.entity';
import { MedicinesEntityService } from '../../../services/medicines-entity.service';

@QueryHandler(GetOneMedicinesQuery)
export class GetOneMedicinesQueryHandler extends GetOneQueryHandler<MedicinesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicinesEntityService.name)
  }
}

