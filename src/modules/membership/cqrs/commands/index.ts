import { CreateMembershipCommandHandler } from './handler/create-membership-command.handler';
import { DeleteMembershipCommandHandler } from './handler/delete-membership-command.handler';
import { UpdateMembershipCommandHandler } from './handler/update-membership-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyMembershipCommandHandler } from './handler/delete-many-membership-command.handler';

export const MembershipCommandHandlers: Array<Provider> = [
  CreateMembershipCommandHandler,
  DeleteMembershipCommandHandler,
  UpdateMembershipCommandHandler,
  DeleteManyMembershipCommandHandler
];
