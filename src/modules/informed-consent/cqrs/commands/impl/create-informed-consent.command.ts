import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';

export class CreateInformedConsentCommand extends CreateCommand<InformedConsentEntity> {
  constructor(public request: InformedConsentEntity) {
    super(request);
  }
}
