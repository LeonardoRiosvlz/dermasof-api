import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetOneAppointmentsQuery } from '../impl/get-one-appointments.query';

import { ContextId, ModuleRef } from '@nestjs/core';
import { GetOneQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-one-query.handler';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { AppointmentsEntityService } from '../../../services/appointments-entity.service';

@QueryHandler(GetOneAppointmentsQuery)
export class GetOneAppointmentsQueryHandler extends GetOneQueryHandler<AppointmentsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AppointmentsEntityService.name)
  }
}

