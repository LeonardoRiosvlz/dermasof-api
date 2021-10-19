import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneMedicalSpecialtiesQuery } from '../impl/get-one-medical-specialties.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { MedicalSpecialtiesEntityService } from '../../../services/medical-specialties-entity.service';

@QueryHandler(GetOneMedicalSpecialtiesQuery)
export class GetOneMedicalSpecialtiesQueryHandler extends GetOneQueryHandler<MedicalSpecialtiesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicalSpecialtiesEntityService.name)
  }
}

