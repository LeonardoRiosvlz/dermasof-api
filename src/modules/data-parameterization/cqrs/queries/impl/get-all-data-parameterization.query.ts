import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllDataParameterizationQuery extends GetAllQuery<DataParameterizationEntity>{
  constructor(public request: GetAllDto<DataParameterizationEntity>) {
    super(request)
  }
}
