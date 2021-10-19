import { ObjectType, PickType } from '@nestjs/graphql';
import { TenantResponse } from './tenant.response';

@ObjectType()
export class SimplifiedTenantResponse extends PickType(TenantResponse, ['id', 'name', 'code'] as const) {}

