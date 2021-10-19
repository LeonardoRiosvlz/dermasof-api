import { AppCommand } from '../../base/AppCommand';
import { GetOneDto } from '../../../../dto/get-one.dto';
import { IEntity } from '../../../../core/interfaces/IEntity';

export class DeleteManyCommand<E extends IEntity> extends AppCommand {
  constructor(public request?: GetOneDto<E>) {
    super()
  }
}
