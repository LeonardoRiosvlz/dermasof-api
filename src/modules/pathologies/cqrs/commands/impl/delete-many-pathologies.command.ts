import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyPathologiesCommand extends DeleteManyCommand<PathologiesEntity>{
  constructor(public request: GetOneDto<PathologiesEntity>) {
    super(request)
  }
}
