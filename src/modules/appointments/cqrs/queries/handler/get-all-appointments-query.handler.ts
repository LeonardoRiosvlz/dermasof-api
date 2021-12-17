import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllAppointmentsQuery } from '../impl/get-all-appointments.query';

import { ModuleRef } from '@nestjs/core';
import { GetAllQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-all-query.handler';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { AppointmentsEntityService } from '../../../services/appointments-entity.service';

@QueryHandler(GetAllAppointmentsQuery)
export class GetAllAppointmentsQueryHandler extends GetAllQueryHandler<AppointmentsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AppointmentsEntityService.name)
  }

}
