import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteMany__name__Command extends DeleteManyCommand<__name__Entity>{
  constructor(public request: GetOneDto<__name__Entity>) {
    super(request)
  }
}
