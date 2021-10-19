import { LaboratoryExamsEntity } from '../entities/laboratory-exams.entity';

import { Injectable } from '@nestjs/common';
import { LaboratoryExamsResponse } from '../graphql/dto/responses/laboratory-exams.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateLaboratoryExamsInput } from '../graphql/dto/inputs/create-laboratory-exams.input';

@Injectable()
export class LaboratoryExamsMapper implements BaseMapper<LaboratoryExamsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateLaboratoryExamsInput>(dto: CreateLaboratoryExamsInput): LaboratoryExamsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = LaboratoryExamsResponse>(dto: LaboratoryExamsResponse): LaboratoryExamsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: LaboratoryExamsEntity): LaboratoryExamsResponse {
    return {
      ...persistentEntity,
    };
  }

}
