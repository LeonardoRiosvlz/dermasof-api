import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedLaboratoryExamsQuery } from '../impl/get-paginated-laboratory-exams.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { LaboratoryExamsEntityService } from '../../../services/laboratory-exams-entity.service';

@QueryHandler(GetPaginatedLaboratoryExamsQuery)
export class GetPaginatedLaboratoryExamsQueryHandler extends GetPaginatedQueryHandler<LaboratoryExamsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, LaboratoryExamsEntityService.name)
  }

}
