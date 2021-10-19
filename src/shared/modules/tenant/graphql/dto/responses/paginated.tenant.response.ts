import { ObjectType } from '@nestjs/graphql';
import PaginatedData from '../../../../graphql/dto/responses/paginated.entity.response';
import { TenantResponse } from './tenant.response';

@ObjectType()
export class PaginatedTenantResponse extends PaginatedData(TenantResponse) {}
