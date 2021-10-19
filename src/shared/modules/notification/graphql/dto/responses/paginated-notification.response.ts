import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { NotificationResponse } from './notification.response';

@ObjectType()
export class PaginatedNotificationResponse extends PaginatedFindResultResponse(NotificationResponse) {
}

