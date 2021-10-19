import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { OfficeEntity } from '../entities/office.entity';
import { OfficeRepository } from '../repositories/office.repository';

import { Result } from 'src/shared/core/class/result';
import { OfficeErrors } from '../errors/office.errors';
import { AppError } from 'src/shared/core/errors/AppError';

@Injectable()
export class OfficeEntityService extends BaseEntityService<OfficeEntity> {
  constructor(private readonly _officeRepo: OfficeRepository) {
    super(_officeRepo, OfficeEntity.name);
  }

  
  async create(entity: OfficeEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new OfficeErrors.OfficeFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
