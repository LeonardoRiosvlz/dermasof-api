import {  Parent,  ResolveField, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { IAppCQRSBus } from '../../../app-cqrs/interfaces/IAppCQRSBus';
import { UserResponse } from '../dto/responses/user.response';
import { SolvedEntityResponse } from '../../../graphql/dto/responses/solved-entity.response';

import { Result } from '../../../../core/class/result';
import { BaseResolver } from '../../../graphql/resolvers/BaseResolver';

import { ProfileResponse } from '../dto/responses/profile.response';
import { UserAreaEntity } from '../../modules/user-area/entities/user-area.entity';
import { GetOneUserAreaQuery } from '../../modules/user-area/cqrs/queries/impl/get-one-user-area.query';
import { UserPositionEntity } from '../../modules/user-position/entities/user-position.entity';
import { GetOneUserPositionQuery } from '../../modules/user-position/cqrs/queries/impl/get-one-user-position.query';

@Resolver(() => ProfileResponse)
export class ProfileResolver extends BaseResolver{
  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
       super()
  }
////Roles////
 @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async area(@Parent() parent?: ProfileResponse): Promise<SolvedEntityResponse> {
    if (parent?.area) {
      const areaOrErr = await this._cqrsBus.execQuery<Result<UserAreaEntity>>(new GetOneUserAreaQuery({where:{
             id: {eq: parent.area.id}
        }}));
        if (areaOrErr.isFailure) {
          return null;
        }
        const area = areaOrErr.unwrap();

        return {
          id: area.id,
          entityName: UserAreaEntity.name,
          identifier: area.name,
          fields: [
            {
              field: 'description',
              value: area?.description
            }
          ]
        }



    }
  }
  /////Cargos//////

  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async position(@Parent() parent?: ProfileResponse): Promise<SolvedEntityResponse> {
    if (parent?.position) {
      const positionOrErr = await this._cqrsBus.execQuery<Result<UserPositionEntity>>(new GetOneUserPositionQuery({where:{
             id: {eq: parent.position.id}
        }}));
        if (positionOrErr.isFailure) {
          return null;
        }
        const position = positionOrErr.unwrap();

        return {
          id: position.id,
          entityName: UserPositionEntity.name,
          identifier: position.name,
          fields: [
            {
              field: 'description',
              value: position?.description
            }
          ]
        }
    }
  }


}



