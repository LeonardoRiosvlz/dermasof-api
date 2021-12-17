import { Args, Mutation, Query, Resolver,Parent,ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateAppointmentsInput } from '../dto/inputs/create-appointments.input';
import { AppointmentsResponse } from '../dto/responses/appointments.response';
import { GetAllAppointmentsInput } from '../dto/inputs/get-all-appointments.input';
import { DeleteAppointmentsInput } from '../dto/inputs/delete-appointments.input';
import { CreateAppointmentsCommand } from '../../cqrs/commands/impl/create-appointments.command';
import { DeleteAppointmentsCommand } from '../../cqrs/commands/impl/delete-appointments.command';
import { GetAllAppointmentsQuery } from '../../cqrs/queries/impl/get-all-appointments.query';
import { AppointmentsMapper } from '../../mapper/appointments.mapper';
import { UpdateAppointmentsInput } from '../dto/inputs/update-appointments.input';
import { UpdateAppointmentsCommand } from '../../cqrs/commands/impl/update-appointments.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedAppointmentsInput } from '../dto/inputs/get-paginated-appointments.input';
import { PaginatedAppointmentsResponse } from '../dto/responses/paginated-appointments.response';
import { GetPaginatedAppointmentsQuery } from '../../cqrs/queries/impl/get-paginated-appointments.query';
import { GetOneAppointmentsInput } from '../dto/inputs/get-one-appointments.input';
import { GetOneAppointmentsQuery } from '../../cqrs/queries/impl/get-one-appointments.query';
import { DeleteManyAppointmentsInput } from '../dto/inputs/delete-many-appointments.input';
import { DeleteManyAppointmentsCommand } from '../../cqrs/commands/impl/delete-many-appointments.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { AppointmentsEntity } from '../../entities/appointments.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { PatientsEntity } from 'src/modules/patients/entities/patients.entity';
import { GetOnePatientsQuery } from 'src/modules/patients/cqrs/queries/impl/get-one-patients.query';
import { HeadquartersEntity } from 'src/modules/headquarters/entities/headquarters.entity';
import { GetOneHeadquartersQuery } from 'src/modules/headquarters/cqrs/queries/impl/get-one-headquarters.query';
import { ConsultationTypeEntity } from 'src/modules/consultation-type/entities/consultation-type.entity';
import { GetOneConsultationTypeQuery } from 'src/modules/consultation-type/cqrs/queries/impl/get-one-consultation-type.query';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';


@Resolver(() => AppointmentsResponse)
export class AppointmentsResolver extends BaseResolver {
  constructor(
    private readonly _appointmentsMapper: AppointmentsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['APPOINTMENTS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createAppointments(
    @Args('input') input: CreateAppointmentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateAppointmentsCommand(
      this._appointmentsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['APPOINTMENTS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateAppointments(
    @Args('input') { update, entityId }: UpdateAppointmentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateAppointmentsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['APPOINTMENTS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteAppointments(
    @Args('input') { entityId }: DeleteAppointmentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteAppointmentsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['APPOINTMENTS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyAppointments(
    @Args('input') input: DeleteManyAppointmentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyAppointmentsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['APPOINTMENTS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[AppointmentsResponse])
  async getAllAppointments(
    @Args('input', { nullable: true }) input: GetAllAppointmentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<AppointmentsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<AppointmentsEntity>>>(new GetAllAppointmentsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._appointmentsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['APPOINTMENTS'], action: ACTION_LIST.GET_ONE})
  @Query(() => AppointmentsResponse, { nullable: true })
  async getOneAppointments(
    @Args('input', { nullable: true }) input: GetOneAppointmentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<AppointmentsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<AppointmentsEntity>>(new GetOneAppointmentsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._appointmentsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['APPOINTMENTS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedAppointmentsResponse, { nullable: true })
  async getPaginatedAppointments(
    @Args('input', { nullable: true }) input: GetPaginatedAppointmentsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedAppointmentsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<AppointmentsEntity>>>(new GetPaginatedAppointmentsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._appointmentsMapper.persistent2Dto),
    };
  }




  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async patient(@Parent() parent?: AppointmentsResponse): Promise<SolvedEntityResponse> {
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
          identifier: patient.email,
          fields: [
            {
              field: 'email',
              value: patient.email
            }
          ]
        }
    }
  }

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async headquarters(@Parent() parent?: AppointmentsResponse): Promise<SolvedEntityResponse> {
    if (parent?.headquarters) {
      const headquartersOrErr = await this._cqrsBus.execQuery<Result<HeadquartersEntity>>(new GetOneHeadquartersQuery({where:{
             id: {eq: parent.headquarters.id}
        }}));
        if (headquartersOrErr.isFailure) {
          return null;
        }
        const headquarters = headquartersOrErr.unwrap();

        return {
          id: headquarters.id,
          entityName: HeadquartersEntity.name,
          identifier: headquarters.name,
          fields: [
            {
              field: 'email',
              value: headquarters.email
            }
          ]
        }
    }
  }



  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async consultationType(@Parent() parent?: AppointmentsResponse): Promise<SolvedEntityResponse> {
    if (parent?.consultationType) {
      const consultationTypeOrErr = await this._cqrsBus.execQuery<Result<ConsultationTypeEntity>>(new GetOneConsultationTypeQuery({where:{
             id: {eq: parent.consultationType.id}
        }}));
        if (consultationTypeOrErr.isFailure) {
          return null;
        }
        const consultationType = consultationTypeOrErr.unwrap();

        return {
          id: consultationType.id,
          entityName: ConsultationTypeEntity.name,
          identifier: consultationType.name,
          fields: [
            {
              field: 'email',
              value: consultationType.name
            }
          ]
        }
    }
  }




  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async doctor(@Parent() parent?: AppointmentsResponse): Promise<SolvedEntityResponse> {
    if (parent?.doctor) {
      const doctorOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({where:{
             id: {eq: parent.doctor.id}
        }}));
        if (doctorOrErr.isFailure) {
          return null;
        }
        const doctor = doctorOrErr.unwrap();

        return {
          id: doctor.id,
          entityName: ConsultationTypeEntity.name,
          identifier: doctor.firstname+" "+doctor.lastname,
          fields: [
            {
              field: 'firstname',
              value: doctor.firstname
            }
          ]
        }
    }
  }




}
