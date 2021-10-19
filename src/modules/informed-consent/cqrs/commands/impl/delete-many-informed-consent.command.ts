import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { InformedConsentEntity } from '../../../entities/informed-consent.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyInformedConsentCommand extends DeleteManyCommand<InformedConsentEntity>{
  constructor(public request: GetOneDto<InformedConsentEntity>) {
    super(request)
  }
}
