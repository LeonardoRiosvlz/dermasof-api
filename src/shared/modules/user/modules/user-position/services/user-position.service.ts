import { Injectable } from '@nestjs/common';
import { BaseEntityService }  from 'src/shared/core/class/base.service';

import { UserPositionEntity } from '../entities/user-position.entity';
import { UserPositionRepository } from '../repositories/user-position.repository';
import { Result } from 'src/shared/core/class/result'
import { AppError } from 'src/shared/core/errors/AppError';
import { UserPositionErrors } from '../errors/user-position.errors';


@Injectable()
export class UserPositionService extends BaseEntityService<UserPositionEntity> {
  constructor(private readonly _userPositionRepo: UserPositionRepository) {
    super(_userPositionRepo, UserPositionEntity.name);
  }
  async create(entity: UserPositionEntity): Promise<Result<void>> {
    try {
      const exists = await this.repo.exist({ name: { eq: entity.name } });
      console.log(exists);
      if (exists) {
        return Result.Fail(new UserPositionErrors.UserPositionFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();

    }catch(err){
      return Result.Fail( new AppError.UnexpectedError(err))

    }
  }

}
