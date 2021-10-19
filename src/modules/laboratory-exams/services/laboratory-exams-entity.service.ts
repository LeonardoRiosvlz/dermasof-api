import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { LaboratoryExamsEntity } from '../entities/laboratory-exams.entity';
import { LaboratoryExamsRepository } from '../repositories/laboratory-exams.repository';
import { LaboratoryExamsErrors } from '../errors/laboratory-exams.errors';

@Injectable()
export class LaboratoryExamsEntityService extends BaseEntityService<LaboratoryExamsEntity> {
  constructor(private readonly _laboratoryExamsRepo: LaboratoryExamsRepository) {
    super(_laboratoryExamsRepo, LaboratoryExamsEntity.name);
  }

  async create(entity: LaboratoryExamsEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ code: { eq: entity.code } });

      if (exists) {
        return Result.Fail(new LaboratoryExamsErrors.LaboratoryExamsFieldUsed('code', entity.code));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
