import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { SettingResponse } from './setting.response';

@ObjectType()
export class PaginatedSettingResponse extends PaginatedFindResultResponse(SettingResponse) {
}

