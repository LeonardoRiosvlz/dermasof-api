import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { ProductCategoryEntity } from '../entities/product-category.entity';
import { ProductCategoryRepository } from '../repositories/product-category.repository';
import { ProductCategoryErrors } from '../errors/product-category.errors';

@Injectable()
export class ProductCategoryEntityService extends BaseEntityService<ProductCategoryEntity> {
  constructor(private readonly _productCategoryRepo: ProductCategoryRepository) {
    super(_productCategoryRepo, ProductCategoryEntity.name);
  }

  async create(entity: ProductCategoryEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new ProductCategoryErrors.ProductCategoryFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
