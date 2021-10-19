import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { MedicinesEntity } from '../entities/medicines.entity';
import { MedicinesRepository } from '../repositories/medicines.repository';
import { MedicinesErrors } from '../errors/medicines.errors';

@Injectable()
export class MedicinesEntityService extends BaseEntityService<MedicinesEntity> {
  constructor(private readonly _medicinesRepo: MedicinesRepository) {
    super(_medicinesRepo, MedicinesEntity.name);
  }

  async create(entity: MedicinesEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ code: { eq: entity.code } });

      if (exists) {
        return Result.Fail(new MedicinesErrors.MedicinesFieldUsed('code', entity.code));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
