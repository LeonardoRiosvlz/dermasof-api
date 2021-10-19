import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllPatientDataSettingsQuery } from '../impl/get-all-patient-data-settings.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { PatientDataSettingsEntityService } from '../../../services/patient-data-settings-entity.service';

@QueryHandler(GetAllPatientDataSettingsQuery)
export class GetAllPatientDataSettingsQueryHandler extends GetAllQueryHandler<PatientDataSettingsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientDataSettingsEntityService.name)
  }

}
