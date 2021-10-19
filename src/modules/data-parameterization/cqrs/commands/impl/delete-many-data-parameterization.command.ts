import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyDataParameterizationCommand extends DeleteManyCommand<DataParameterizationEntity>{
  constructor(public request: GetOneDto<DataParameterizationEntity>) {
    super(request)
  }
}
