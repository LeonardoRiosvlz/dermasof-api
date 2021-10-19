import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { PathologiesEntity } from '../entities/pathologies.entity';
import { PathologiesRepository } from '../repositories/pathologies.repository';
import { PathologiesErrors } from '../errors/pathologies.errors';

@Injectable()
export class PathologiesEntityService extends BaseEntityService<PathologiesEntity> {
  constructor(private readonly _pathologiesRepo: PathologiesRepository) {
    super(_pathologiesRepo, PathologiesEntity.name);
  }

  async create(entity: PathologiesEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ code: { eq: entity.code } });

      if (exists) {
        return Result.Fail(new PathologiesErrors.PathologiesFieldUsed('code', entity.code));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

}
