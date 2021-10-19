import {  ObjectType, PickType } from '@nestjs/graphql';
import { RoleResponse } from '../../../../user/modules/role/graphql/dto/responses/role.response';


@ObjectType()
export class AuthRoleResponse extends PickType(RoleResponse, ['id', 'name', 'permits'] as const) {

}




