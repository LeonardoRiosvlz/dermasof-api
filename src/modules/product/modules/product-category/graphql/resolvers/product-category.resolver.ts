import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateProductCategoryInput } from '../dto/inputs/create-product-category.input';
import { ProductCategoryResponse } from '../dto/responses/product-category.response';
import { GetAllProductCategoryInput } from '../dto/inputs/get-all-product-category.input';
import { DeleteProductCategoryInput } from '../dto/inputs/delete-product-category.input';
import { CreateProductCategoryCommand } from '../../cqrs/commands/impl/create-product-category.command';
import { DeleteProductCategoryCommand } from '../../cqrs/commands/impl/delete-product-category.command';
import { GetAllProductCategoryQuery } from '../../cqrs/queries/impl/get-all-product-category.query';
import { ProductCategoryMapper } from '../../mapper/product-category.mapper';
import { UpdateProductCategoryInput } from '../dto/inputs/update-product-category.input';
import { UpdateProductCategoryCommand } from '../../cqrs/commands/impl/update-product-category.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedProductCategoryInput } from '../dto/inputs/get-paginated-product-category.input';
import { PaginatedProductCategoryResponse } from '../dto/responses/paginated-product-category.response';
import { GetPaginatedProductCategoryQuery } from '../../cqrs/queries/impl/get-paginated-product-category.query';
import { GetOneProductCategoryInput } from '../dto/inputs/get-one-product-category.input';
import { GetOneProductCategoryQuery } from '../../cqrs/queries/impl/get-one-product-category.query';
import { DeleteManyProductCategoryInput } from '../dto/inputs/delete-many-product-category.input';
import { DeleteManyProductCategoryCommand } from '../../cqrs/commands/impl/delete-many-product-category.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ProductCategoryEntity } from '../../entities/product-category.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => ProductCategoryResponse)
export class ProductCategoryResolver extends BaseResolver {
  constructor(
    private readonly _productCategoryMapper: ProductCategoryMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT_CATEGORY'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createProductCategory(
    @Args('input') input: CreateProductCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateProductCategoryCommand(
      this._productCategoryMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT_CATEGORY'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateProductCategory(
    @Args('input') { update, entityId }: UpdateProductCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateProductCategoryCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT_CATEGORY'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteProductCategory(
    @Args('input') { entityId }: DeleteProductCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteProductCategoryCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT_CATEGORY'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyProductCategory(
    @Args('input') input: DeleteManyProductCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyProductCategoryCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT_CATEGORY'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ProductCategoryResponse])
  async getAllProductCategory(
    @Args('input', { nullable: true }) input: GetAllProductCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ProductCategoryResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ProductCategoryEntity>>>(new GetAllProductCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._productCategoryMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT_CATEGORY'], action: ACTION_LIST.GET_ONE})
  @Query(() => ProductCategoryResponse, { nullable: true })
  async getOneProductCategory(
    @Args('input', { nullable: true }) input: GetOneProductCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ProductCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ProductCategoryEntity>>(new GetOneProductCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._productCategoryMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT_CATEGORY'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedProductCategoryResponse, { nullable: true })
  async getPaginatedProductCategory(
    @Args('input', { nullable: true }) input: GetPaginatedProductCategoryInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedProductCategoryResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ProductCategoryEntity>>>(new GetPaginatedProductCategoryQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._productCategoryMapper.persistent2Dto),
    };
  }


}
