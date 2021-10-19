import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneLaboratoryExamsQuery extends GetOneQuery<LaboratoryExamsEntity>{
  constructor(public request: GetOneDto<LaboratoryExamsEntity>) {
    super(request)
  }
}
