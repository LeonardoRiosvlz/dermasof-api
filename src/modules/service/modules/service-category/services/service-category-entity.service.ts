import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { ServiceCategoryEntity } from '../entities/service-category.entity';
import { ServiceCategoryRepository } from '../repositories/service-category.repository';
import { ServiceCategoryErrors } from '../errors/service-category.errors';

@Injectable()
export class ServiceCategoryEntityService extends BaseEntityService<ServiceCategoryEntity> {
  constructor(private readonly _serviceCategoryRepo: ServiceCategoryRepository) {
    super(_serviceCategoryRepo, ServiceCategoryEntity.name);
  }

  async create(entity: ServiceCategoryEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new ServiceCategoryErrors.ServiceCategoryFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}
