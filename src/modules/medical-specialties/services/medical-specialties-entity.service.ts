import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { MedicalSpecialtiesEntity } from '../entities/medical-specialties.entity';
import { MedicalSpecialtiesRepository } from '../repositories/medical-specialties.repository';
import { MedicalSpecialtiesErrors } from '../errors/medical-specialties.errors';

@Injectable()
export class MedicalSpecialtiesEntityService extends BaseEntityService<MedicalSpecialtiesEntity> {
  constructor(private readonly _medicalSpecialtiesRepo: MedicalSpecialtiesRepository) {
    super(_medicalSpecialtiesRepo, MedicalSpecialtiesEntity.name);
  }

  async create(entity: MedicalSpecialtiesEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new MedicalSpecialtiesErrors.MedicalSpecialtiesFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
