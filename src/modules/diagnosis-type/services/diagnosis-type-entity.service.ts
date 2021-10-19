import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { DiagnosisTypeEntity } from '../entities/diagnosis-type.entity';
import { DiagnosisTypeRepository } from '../repositories/diagnosis-type.repository';
import { DiagnosisTypeErrors } from '../errors/diagnosis-type.errors';

@Injectable()
export class DiagnosisTypeEntityService extends BaseEntityService<DiagnosisTypeEntity> {
  constructor(private readonly _diagnosisTypeRepo: DiagnosisTypeRepository) {
    super(_diagnosisTypeRepo, DiagnosisTypeEntity.name);
  }

  async create(entity: DiagnosisTypeEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new DiagnosisTypeErrors.DiagnosisTypeFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}
