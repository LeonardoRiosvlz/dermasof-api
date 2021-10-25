import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { ConsultationTypeEntity } from '../entities/consultation-type.entity';
import { ConsultationTypeRepository } from '../repositories/consultation-type.repository';
import { ConsultationTypeErrors } from '../errors/consultation-type.errors';

@Injectable()
export class ConsultationTypeEntityService extends BaseEntityService<ConsultationTypeEntity> {
  constructor(private readonly _consultationTypeRepo: ConsultationTypeRepository) {
    super(_consultationTypeRepo, ConsultationTypeEntity.name);
  }

  async create(entity: ConsultationTypeEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new ConsultationTypeErrors.ConsultationTypeFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
