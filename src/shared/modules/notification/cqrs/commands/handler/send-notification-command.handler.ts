import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { SendNotificationCommand } from '../impl/send-notification.command';
import { Result } from 'src/shared/core/class/result';
import { AppNotificationService } from '../../../services/app-notification.service';


@CommandHandler(SendNotificationCommand)
export class SendNotificationCommandHandler implements ICommandHandler<SendNotificationCommand>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {  }

    async execute({ request, contextId }: SendNotificationCommand): Promise<Result<void>> {
      const service = await this._moduleRef.resolve(AppNotificationService, contextId as any);
      return service.create(request)
    }

}
