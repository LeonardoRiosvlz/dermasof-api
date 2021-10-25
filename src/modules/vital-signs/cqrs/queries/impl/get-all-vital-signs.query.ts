import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { VitalSignsEntity } from '../../../entities/vital-signs.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllVitalSignsQuery extends GetAllQuery<VitalSignsEntity>{
  constructor(public request: GetAllDto<VitalSignsEntity>) {
    super(request)
  }
}
