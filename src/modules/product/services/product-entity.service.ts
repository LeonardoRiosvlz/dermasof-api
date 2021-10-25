import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { ProductEntity } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';
import { ProductErrors } from '../errors/product.errors';

@Injectable()
export class ProductEntityService extends BaseEntityService<ProductEntity> {
  constructor(private readonly _productRepo: ProductRepository) {
    super(_productRepo, ProductEntity.name);
  }

  async create(entity: ProductEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new ProductErrors.ProductFieldUsed('name', entity.name));
      }

      const exists_code =await this.repo.exist({ code: { eq: entity.code } });

      if (exists_code) {
        return Result.Fail(new ProductErrors.ProductFieldUsed('code', entity.code));
      }

      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }



}
