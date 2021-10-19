import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedPatientDataSettingsQuery } from '../impl/get-paginated-patient-data-settings.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { PatientDataSettingsEntityService } from '../../../services/patient-data-settings-entity.service';

@QueryHandler(GetPaginatedPatientDataSettingsQuery)
export class GetPaginatedPatientDataSettingsQueryHandler extends GetPaginatedQueryHandler<PatientDataSettingsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientDataSettingsEntityService.name)
  }

}
