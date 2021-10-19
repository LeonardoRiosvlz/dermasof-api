import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { HeadquartersEntity } from '../../../entities/headquarters.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyHeadquartersCommand extends DeleteManyCommand<HeadquartersEntity>{
  constructor(public request: GetOneDto<HeadquartersEntity>) {
    super(request)
  }
}
