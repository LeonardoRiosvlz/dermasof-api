import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyVitalSignsCommand extends DeleteManyCommand<VitalSignsEntity>{
  constructor(public request: GetOneDto<VitalSignsEntity>) {
    super(request)
  }
}
