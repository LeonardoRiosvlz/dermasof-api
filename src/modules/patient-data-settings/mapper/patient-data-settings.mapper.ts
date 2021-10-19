import { PatientDataSettingsEntity } from '../entities/patient-data-settings.entity';

import { Injectable } from '@nestjs/common';
import { PatientDataSettingsResponse } from '../graphql/dto/responses/patient-data-settings.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreatePatientDataSettingsInput } from '../graphql/dto/inputs/create-patient-data-settings.input';

@Injectable()
export class PatientDataSettingsMapper implements BaseMapper<PatientDataSettingsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreatePatientDataSettingsInput>(dto: CreatePatientDataSettingsInput): PatientDataSettingsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = PatientDataSettingsResponse>(dto: PatientDataSettingsResponse): PatientDataSettingsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: PatientDataSettingsEntity): PatientDataSettingsResponse {
    return {
      ...persistentEntity,
    };
  }

}
