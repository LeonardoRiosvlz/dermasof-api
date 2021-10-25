import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneVitalSignsQuery extends GetOneQuery<VitalSignsEntity>{
  constructor(public request: GetOneDto<VitalSignsEntity>) {
    super(request)
  }
}
