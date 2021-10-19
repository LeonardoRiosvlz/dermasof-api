import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { FloorEntity } from '../entities/floor.entity';
import { FloorRepository } from '../repositories/floor.repository';
import { FloorErrors } from '../errors/floor.errors';
import { AppError } from 'src/shared/core/errors/AppError';

@Injectable()
export class FloorEntityService extends BaseEntityService<FloorEntity> {
  constructor(private readonly _floorRepo: FloorRepository) {
    super(_floorRepo, FloorEntity.name);
  }


  async create(entity: FloorEntity): Promise<Result<void>> {

    try {
      const exists = await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new FloorErrors.FloorFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
