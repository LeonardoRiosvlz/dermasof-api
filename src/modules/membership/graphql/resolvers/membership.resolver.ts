import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateMembershipInput } from '../dto/inputs/create-membership.input';
import { MembershipResponse } from '../dto/responses/membership.response';
import { GetAllMembershipInput } from '../dto/inputs/get-all-membership.input';
import { DeleteMembershipInput } from '../dto/inputs/delete-membership.input';
import { CreateMembershipCommand } from '../../cqrs/commands/impl/create-membership.command';
import { DeleteMembershipCommand } from '../../cqrs/commands/impl/delete-membership.command';
import { GetAllMembershipQuery } from '../../cqrs/queries/impl/get-all-membership.query';
import { MembershipMapper } from '../../mapper/membership.mapper';
import { UpdateMembershipInput } from '../dto/inputs/update-membership.input';
import { UpdateMembershipCommand } from '../../cqrs/commands/impl/update-membership.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedMembershipInput } from '../dto/inputs/get-paginated-membership.input';
import { PaginatedMembershipResponse } from '../dto/responses/paginated-membership.response';
import { GetPaginatedMembershipQuery } from '../../cqrs/queries/impl/get-paginated-membership.query';
import { GetOneMembershipInput } from '../dto/inputs/get-one-membership.input';
import { GetOneMembershipQuery } from '../../cqrs/queries/impl/get-one-membership.query';
import { DeleteManyMembershipInput } from '../dto/inputs/delete-many-membership.input';
import { DeleteManyMembershipCommand } from '../../cqrs/commands/impl/delete-many-membership.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { MembershipEntity } from '../../entities/membership.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';


@Resolver(() => MembershipResponse)
export class MembershipResolver extends BaseResolver {
  constructor(
    private readonly _membershipMapper: MembershipMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEMBERSHIP'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createMembership(
    @Args('input') input: CreateMembershipInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateMembershipCommand(
      this._membershipMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEMBERSHIP'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateMembership(
    @Args('input') { update, entityId }: UpdateMembershipInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateMembershipCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEMBERSHIP'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteMembership(
    @Args('input') { entityId }: DeleteMembershipInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteMembershipCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEMBERSHIP'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyMembership(
    @Args('input') input: DeleteManyMembershipInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyMembershipCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEMBERSHIP'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[MembershipResponse])
  async getAllMembership(
    @Args('input', { nullable: true }) input: GetAllMembershipInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<MembershipResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<MembershipEntity>>>(new GetAllMembershipQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._membershipMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEMBERSHIP'], action: ACTION_LIST.GET_ONE})
  @Query(() => MembershipResponse, { nullable: true })
  async getOneMembership(
    @Args('input', { nullable: true }) input: GetOneMembershipInput,
    @CurrentLanguage() lang?: string,
  ): Promise<MembershipResponse> {
    const resp = await this._cqrsBus.execQuery<Result<MembershipEntity>>(new GetOneMembershipQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._membershipMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['MEMBERSHIP'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedMembershipResponse, { nullable: true })
  async getPaginatedMembership(
    @Args('input', { nullable: true }) input: GetPaginatedMembershipInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedMembershipResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<MembershipEntity>>>(new GetPaginatedMembershipQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._membershipMapper.persistent2Dto),
    };
  }


}
