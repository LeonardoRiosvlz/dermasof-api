import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreatePhotographicReportInput } from '../dto/inputs/create-photographic-report.input';
import { PhotographicReportResponse } from '../dto/responses/photographic-report.response';
import { GetAllPhotographicReportInput } from '../dto/inputs/get-all-photographic-report.input';
import { DeletePhotographicReportInput } from '../dto/inputs/delete-photographic-report.input';
import { CreatePhotographicReportCommand } from '../../cqrs/commands/impl/create-photographic-report.command';
import { DeletePhotographicReportCommand } from '../../cqrs/commands/impl/delete-photographic-report.command';
import { GetAllPhotographicReportQuery } from '../../cqrs/queries/impl/get-all-photographic-report.query';
import { PhotographicReportMapper } from '../../mapper/photographic-report.mapper';
import { UpdatePhotographicReportInput } from '../dto/inputs/update-photographic-report.input';
import { UpdatePhotographicReportCommand } from '../../cqrs/commands/impl/update-photographic-report.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedPhotographicReportInput } from '../dto/inputs/get-paginated-photographic-report.input';
import { PaginatedPhotographicReportResponse } from '../dto/responses/paginated-photographic-report.response';
import { GetPaginatedPhotographicReportQuery } from '../../cqrs/queries/impl/get-paginated-photographic-report.query';
import { GetOnePhotographicReportInput } from '../dto/inputs/get-one-photographic-report.input';
import { GetOnePhotographicReportQuery } from '../../cqrs/queries/impl/get-one-photographic-report.query';
import { DeleteManyPhotographicReportInput } from '../dto/inputs/delete-many-photographic-report.input';
import { DeleteManyPhotographicReportCommand } from '../../cqrs/commands/impl/delete-many-photographic-report.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { PhotographicReportEntity } from '../../entities/photographic-report.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientsEntity } from 'src/modules/patients/entities/patients.entity';
import { GetOnePatientsQuery } from 'src/modules/patients/cqrs/queries/impl/get-one-patients.query';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { GetOneFilesQuery } from 'src/shared/modules/files/cqrs/queries/impl/get-one-files.query';


@Resolver(() => PhotographicReportResponse)
export class PhotographicReportResolver extends BaseResolver {
  constructor(
    private readonly _photographicReportMapper: PhotographicReportMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createPhotographicReport(
    @Args('input') input: CreatePhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreatePhotographicReportCommand(
      this._photographicReportMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updatePhotographicReport(
    @Args('input') { update, entityId }: UpdatePhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdatePhotographicReportCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deletePhotographicReport(
    @Args('input') { entityId }: DeletePhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeletePhotographicReportCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyPhotographicReport(
    @Args('input') input: DeleteManyPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyPhotographicReportCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[PhotographicReportResponse])
  async getAllPhotographicReport(
    @Args('input', { nullable: true }) input: GetAllPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<PhotographicReportResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<PhotographicReportEntity>>>(new GetAllPhotographicReportQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._photographicReportMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.GET_ONE})
  @Query(() => PhotographicReportResponse, { nullable: true })
  async getOnePhotographicReport(
    @Args('input', { nullable: true }) input: GetOnePhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PhotographicReportResponse> {
    const resp = await this._cqrsBus.execQuery<Result<PhotographicReportEntity>>(new GetOnePhotographicReportQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._photographicReportMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['PHOTOGRAPHIC_REPORT'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedPhotographicReportResponse, { nullable: true })
  async getPaginatedPhotographicReport(
    @Args('input', { nullable: true }) input: GetPaginatedPhotographicReportInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedPhotographicReportResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<PhotographicReportEntity>>>(new GetPaginatedPhotographicReportQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._photographicReportMapper.persistent2Dto),
    };
  }


  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async patient(@Parent() parent?: PhotographicReportResponse): Promise<SolvedEntityResponse> {
    if (parent?.patient) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<PatientsEntity>>(new GetOnePatientsQuery({where:{
             id: {eq: parent.patient.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const patient = patientOrErr.unwrap();

        return {
          id: patient.id,
          entityName: PatientsEntity.name,
          identifier: patient.firstName+" "+ patient.firstSurName,
          fields: [
            {
              field: 'firstName',
              value: patient?.firstName
            },
            {
              field: 'lastSurName',
              value: patient?.lastSurName
            }
          ]
        }
    }
  }

  
  @ResolveField(() => CloudFileResponse, { nullable: true })
  async after(@Parent() parent?: PhotographicReportResponse): Promise<CloudFileResponse> {
    if (parent?.after) {
      const afterOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.after.id },
        },
      }));
      if (afterOrErr.isFailure) {
        return null;
      }
      const file = afterOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }

  @ResolveField(() => CloudFileResponse, { nullable: true })
  async before(@Parent() parent?: PhotographicReportResponse): Promise<CloudFileResponse> {
    if (parent?.before) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.before.id },
        },
      }));
      if (fileOrErr.isFailure) {
        return null;
      }
      const file = fileOrErr.unwrap();
      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }


  

}
