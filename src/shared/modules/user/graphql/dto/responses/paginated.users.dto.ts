import { ObjectType } from '@nestjs/graphql';
import PaginatedData from '../../../../graphql/dto/responses/paginated.entity.response';
import { UserResponse } from './user.response';

@ObjectType()
export class PaginatedUsers extends PaginatedData(UserResponse) {}
