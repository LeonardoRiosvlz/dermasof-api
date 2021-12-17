import { AppointmentsEntity } from '../entities/appointments.entity';

import { Injectable } from '@nestjs/common';
import { AppointmentsResponse } from '../graphql/dto/responses/appointments.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateAppointmentsInput } from '../graphql/dto/inputs/create-appointments.input';

@Injectable()
export class AppointmentsMapper implements BaseMapper<AppointmentsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateAppointmentsInput>(dto: CreateAppointmentsInput): AppointmentsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = AppointmentsResponse>(dto: AppointmentsResponse): AppointmentsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: AppointmentsEntity): AppointmentsResponse {
    return {
      ...persistentEntity,
      patient: persistentEntity?.patient ? { id: persistentEntity.patient } : undefined,
      headquarters: persistentEntity?.headquarters ? { id: persistentEntity.headquarters } : undefined,
      consultationType: persistentEntity?.consultationType ? { id: persistentEntity.consultationType } : undefined,
      doctor: persistentEntity?.doctor ? { id: persistentEntity.doctor } : undefined,
    };
  }

}
