import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { OfficeEntity } from '../../../entities/office.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyOfficeCommand extends DeleteManyCommand<OfficeEntity>{
  constructor(public request: GetOneDto<OfficeEntity>) {
    super(request)
  }
}
