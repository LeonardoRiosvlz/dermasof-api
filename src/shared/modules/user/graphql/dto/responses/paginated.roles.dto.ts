import { ObjectType } from '@nestjs/graphql';
import { RoleResponse } from '../../../modules/role/graphql/dto/responses/role.response';
import PaginatedData from '../../../../graphql/dto/responses/paginated.entity.response';

@ObjectType()
export class PaginatedRoles extends PaginatedData(RoleResponse) {}
