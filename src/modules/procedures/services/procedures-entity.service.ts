import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { ProceduresEntity } from '../entities/procedures.entity';
import { ProceduresRepository } from '../repositories/procedures.repository';
import { ProceduresErrors } from '../errors/procedures.errors';

@Injectable()
export class ProceduresEntityService extends BaseEntityService<ProceduresEntity> {
  constructor(private readonly _proceduresRepo: ProceduresRepository) {
    super(_proceduresRepo, ProceduresEntity.name);
  }


  async create(entity: ProceduresEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ code: { eq: entity.code } });

      if (exists) {
        return Result.Fail(new ProceduresErrors.ProceduresFieldUsed('code', entity.code));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

}
