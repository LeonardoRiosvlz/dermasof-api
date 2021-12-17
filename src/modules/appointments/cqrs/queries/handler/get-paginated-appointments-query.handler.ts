import { QueryHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { GetPaginatedAppointmentsQuery } from '../impl/get-paginated-appointments.query';
import { GetPaginatedQueryHandler } from 'src/shared/modules/app-cqrs/queries/handler/get-paginated-query.handler';
import { AppointmentsEntity } from '../../../entities/appointments.entity';
import { AppointmentsEntityService } from '../../../services/appointments-entity.service';

@QueryHandler(GetPaginatedAppointmentsQuery)
export class GetPaginatedAppointmentsQueryHandler extends GetPaginatedQueryHandler<AppointmentsEntity>{
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
     super(_moduleRef, AppointmentsEntityService.name)
  }

}
