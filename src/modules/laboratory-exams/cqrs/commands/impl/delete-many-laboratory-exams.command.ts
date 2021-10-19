import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyLaboratoryExamsCommand extends DeleteManyCommand<LaboratoryExamsEntity>{
  constructor(public request: GetOneDto<LaboratoryExamsEntity>) {
    super(request)
  }
}
