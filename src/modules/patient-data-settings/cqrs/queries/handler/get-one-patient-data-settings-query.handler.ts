import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOnePatientDataSettingsQuery } from '../impl/get-one-patient-data-settings.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { PatientDataSettingsEntity } from '../../../entities/patient-data-settings.entity';
import { PatientDataSettingsEntityService } from '../../../services/patient-data-settings-entity.service';

@QueryHandler(GetOnePatientDataSettingsQuery)
export class GetOnePatientDataSettingsQueryHandler extends GetOneQueryHandler<PatientDataSettingsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, PatientDataSettingsEntityService.name)
  }
}

