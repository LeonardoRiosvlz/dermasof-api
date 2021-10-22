import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ServiceEntity } from '../../../entities/service.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyServiceCommand extends DeleteManyCommand<ServiceEntity>{
  constructor(public request: GetOneDto<ServiceEntity>) {
    super(request)
  }
}
