import { MedicalSpecialtiesEntity } from '../entities/medical-specialties.entity';

import { Injectable } from '@nestjs/common';
import { MedicalSpecialtiesResponse } from '../graphql/dto/responses/medical-specialties.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateMedicalSpecialtiesInput } from '../graphql/dto/inputs/create-medical-specialties.input';

@Injectable()
export class MedicalSpecialtiesMapper implements BaseMapper<MedicalSpecialtiesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateMedicalSpecialtiesInput>(dto: CreateMedicalSpecialtiesInput): MedicalSpecialtiesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = MedicalSpecialtiesResponse>(dto: MedicalSpecialtiesResponse): MedicalSpecialtiesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: MedicalSpecialtiesEntity): MedicalSpecialtiesResponse {
    return {
      ...persistentEntity,
    };
  }

}
