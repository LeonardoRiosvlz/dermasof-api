import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import { HeadquartersEntity } from '../entities/headquarters.entity';
import { HeadquartersRepository } from '../repositories/headquarters.repository';
import { HeadquartersErrors } from '../errors/headquarters.errors';

@Injectable()
export class HeadquartersEntityService extends BaseEntityService<HeadquartersEntity> {
  constructor(private readonly _headquartersRepo: HeadquartersRepository) {
    super(_headquartersRepo, HeadquartersEntity.name);
  }

  async create(entity: HeadquartersEntity): Promise<Result<void>> {

    try {
      const exists_name =await this.repo.exist({ name: { eq: entity.name } });

      if (exists_name) {
        return Result.Fail(new HeadquartersErrors.HeadquartersFieldUsed('name', entity.name));
      }
      const exists_code =await this.repo.exist({ code: { eq: entity.code } });

      if (exists_code) {
        return Result.Fail(new HeadquartersErrors.HeadquartersFieldUsed('code', entity.code));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
