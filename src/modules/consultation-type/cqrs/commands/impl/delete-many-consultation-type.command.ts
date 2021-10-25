import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { ConsultationTypeEntity } from '../../../entities/consultation-type.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyConsultationTypeCommand extends DeleteManyCommand<ConsultationTypeEntity>{
  constructor(public request: GetOneDto<ConsultationTypeEntity>) {
    super(request)
  }
}
