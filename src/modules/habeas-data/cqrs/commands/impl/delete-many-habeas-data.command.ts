import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { HabeasDataEntity } from '../../../entities/habeas-data.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyHabeasDataCommand extends DeleteManyCommand<HabeasDataEntity>{
  constructor(public request: GetOneDto<HabeasDataEntity>) {
    super(request)
  }
}
