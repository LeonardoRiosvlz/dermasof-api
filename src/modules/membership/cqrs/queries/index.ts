import { GetAllMembershipQueryHandler } from './handler/get-all-membership-query.handler';
import { GetPaginatedMembershipQueryHandler } from './handler/get-paginated-membership-query.handler';
import { GetOneMembershipQueryHandler } from './handler/get-one-membership-query.handler';
import { Provider } from '@nestjs/common';

export const MembershipQueryHandlers:Array<Provider> = [
  GetAllMembershipQueryHandler,
  GetPaginatedMembershipQueryHandler,
  GetOneMembershipQueryHandler,
];
