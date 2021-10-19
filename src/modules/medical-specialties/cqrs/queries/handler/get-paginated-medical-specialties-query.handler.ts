import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedMedicalSpecialtiesQuery } from '../impl/get-paginated-medical-specialties.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { MedicalSpecialtiesEntity } from '../../../entities/medical-specialties.entity';
import { MedicalSpecialtiesEntityService } from '../../../services/medical-specialties-entity.service';

@QueryHandler(GetPaginatedMedicalSpecialtiesQuery)
export class GetPaginatedMedicalSpecialtiesQueryHandler extends GetPaginatedQueryHandler<MedicalSpecialtiesEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, MedicalSpecialtiesEntityService.name)
  }

}
