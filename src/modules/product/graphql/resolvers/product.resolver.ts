import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateProductInput } from '../dto/inputs/create-product.input';
import { ProductResponse } from '../dto/responses/product.response';
import { GetAllProductInput } from '../dto/inputs/get-all-product.input';
import { DeleteProductInput } from '../dto/inputs/delete-product.input';
import { CreateProductCommand } from '../../cqrs/commands/impl/create-product.command';
import { DeleteProductCommand } from '../../cqrs/commands/impl/delete-product.command';
import { GetAllProductQuery } from '../../cqrs/queries/impl/get-all-product.query';
import { ProductMapper } from '../../mapper/product.mapper';
import { UpdateProductInput } from '../dto/inputs/update-product.input';
import { UpdateProductCommand } from '../../cqrs/commands/impl/update-product.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedProductInput } from '../dto/inputs/get-paginated-product.input';
import { PaginatedProductResponse } from '../dto/responses/paginated-product.response';
import { GetPaginatedProductQuery } from '../../cqrs/queries/impl/get-paginated-product.query';
import { GetOneProductInput } from '../dto/inputs/get-one-product.input';
import { GetOneProductQuery } from '../../cqrs/queries/impl/get-one-product.query';
import { DeleteManyProductInput } from '../dto/inputs/delete-many-product.input';
import { DeleteManyProductCommand } from '../../cqrs/commands/impl/delete-many-product.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { ProductEntity } from '../../entities/product.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => ProductResponse)
export class ProductResolver extends BaseResolver {
  constructor(
    private readonly _productMapper: ProductMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createProduct(
    @Args('input') input: CreateProductInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateProductCommand(
      this._productMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateProduct(
    @Args('input') { update, entityId }: UpdateProductInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateProductCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteProduct(
    @Args('input') { entityId }: DeleteProductInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteProductCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyProduct(
    @Args('input') input: DeleteManyProductInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyProductCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[ProductResponse])
  async getAllProduct(
    @Args('input', { nullable: true }) input: GetAllProductInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<ProductResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<ProductEntity>>>(new GetAllProductQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._productMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT'], action: ACTION_LIST.GET_ONE})
  @Query(() => ProductResponse, { nullable: true })
  async getOneProduct(
    @Args('input', { nullable: true }) input: GetOneProductInput,
    @CurrentLanguage() lang?: string,
  ): Promise<ProductResponse> {
    const resp = await this._cqrsBus.execQuery<Result<ProductEntity>>(new GetOneProductQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._productMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PRODUCT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedProductResponse, { nullable: true })
  async getPaginatedProduct(
    @Args('input', { nullable: true }) input: GetPaginatedProductInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedProductResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<ProductEntity>>>(new GetPaginatedProductQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._productMapper.persistent2Dto),
    };
  }


}
