import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';

export class UpdateInformedConsentCommand extends UpdateCommand<InformedConsentEntity> {
  constructor(public entityId: string, update: Partial<InformedConsentEntity>) {
    super({entityId, update});
  }
}
