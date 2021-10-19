import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { FloorEntity } from '../../../entities/floor.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyFloorCommand extends DeleteManyCommand<FloorEntity>{
  constructor(public request: GetOneDto<FloorEntity>) {
    super(request)
  }
}
