import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { LaboratoryExamsEntity } from '../../../entities/laboratory-exams.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllLaboratoryExamsQuery extends GetAllQuery<LaboratoryExamsEntity>{
  constructor(public request: GetAllDto<LaboratoryExamsEntity>) {
    super(request)
  }
}
