import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllMedicalSpecialtiesQuery } from '../impl/get-all-medical-specialties.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { MedicalSpecialtiesEntityService } from '../../../services/medical-specialties-entity.service';

@QueryHandler(GetAllMedicalSpecialtiesQuery)
export class GetAllMedicalSpecialtiesQueryHandler extends GetAllQueryHandler<MedicalSpecialtiesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicalSpecialtiesEntityService.name)
  }

}
