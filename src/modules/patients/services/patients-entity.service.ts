import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { PatientsEntity } from '../entities/patients.entity';
import { PatientsRepository } from '../repositories/patients.repository';
import { PatientsErrors } from '../errors/patients.errors';

@Injectable()
export class PatientsEntityService extends BaseEntityService<PatientsEntity> {
  constructor(private readonly _patientsRepo: PatientsRepository) {
    super(_patientsRepo, PatientsEntity.name);
  }

  async create(entity: PatientsEntity): Promise<Result<void>> {

    try {
      const exists_email =await this.repo.exist({ email: { eq: entity.email } });

      if (exists_email) {
        return Result.Fail(new PatientsErrors.PatientsFieldUsed('email', entity.email));
      }
      const exists_document =await this.repo.exist({ documentNumber: { eq: entity.documentNumber } });

      if (exists_document) {
        return Result.Fail(new PatientsErrors.PatientsFieldUsed('documentNumber', entity.documentNumber));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
