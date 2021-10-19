import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { DiagnosisEntity } from '../entities/diagnosis.entity';
import { DiagnosisRepository } from '../repositories/diagnosis.repository';
import { DiagnosisErrors } from '../errors/diagnosis.errors';

@Injectable()
export class DiagnosisEntityService extends BaseEntityService<DiagnosisEntity> {
  constructor(private readonly _diagnosisRepo: DiagnosisRepository) {
    super(_diagnosisRepo, DiagnosisEntity.name);
  }


  async create(entity: DiagnosisEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ code: { eq: entity.code } });

      if (exists) {
        return Result.Fail(new DiagnosisErrors.DiagnosisFieldUsed('code', entity.code));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

}
