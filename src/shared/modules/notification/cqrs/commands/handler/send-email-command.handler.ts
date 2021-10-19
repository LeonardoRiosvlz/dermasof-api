import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {  ModuleRef } from '@nestjs/core';
import { SendNotificationCommand } from '../impl/send-notification.command';
import { Result } from 'src/shared/core/class/result';
import { AppNotificationService } from '../../../services/app-notification.service';
import { SendEmailCommand } from '../impl/send-email.command';
import { AppMailService } from '../../../services/app-mail.service';


@CommandHandler(SendEmailCommand)
export class SendEmailCommandCommandHandler implements ICommandHandler<SendEmailCommand>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {  }

    async execute({ request:{to, data}, contextId }: SendEmailCommand): Promise<Result<void>> {
      const service = await this._moduleRef.resolve(AppMailService, contextId as any);
      return service.send(to, data)
    }

}
