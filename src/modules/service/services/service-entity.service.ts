import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { ServiceEntity } from '../entities/service.entity';
import { ServiceRepository } from '../repositories/service.repository';
import { ServiceErrors } from '../errors/service.errors';

@Injectable()
export class ServiceEntityService extends BaseEntityService<ServiceEntity> {
  constructor(private readonly _serviceRepo: ServiceRepository) {
    super(_serviceRepo, ServiceEntity.name);
  }


  async create(entity: ServiceEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new ServiceErrors.ServiceFieldUsed('name', entity.name));
      }

      const exists_code =await this.repo.exist({ code: { eq: entity.code } });

      if (exists_code) {
        return Result.Fail(new  ServiceErrors.ServiceFieldUsed('code', entity.code));
      }

      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

}