import { MedicinesEntity } from '../entities/medicines.entity';

import { Injectable } from '@nestjs/common';
import { MedicinesResponse } from '../graphql/dto/responses/medicines.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateMedicinesInput } from '../graphql/dto/inputs/create-medicines.input';

@Injectable()
export class MedicinesMapper implements BaseMapper<MedicinesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateMedicinesInput>(dto: CreateMedicinesInput): MedicinesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = MedicinesResponse>(dto: MedicinesResponse): MedicinesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: MedicinesEntity): MedicinesResponse {
    return {
      ...persistentEntity,
    };
  }

}
