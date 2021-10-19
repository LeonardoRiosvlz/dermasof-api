import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { DataParameterizationEntity } from '../../../entities/data-parameterization.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneDataParameterizationQuery extends GetOneQuery<DataParameterizationEntity>{
  constructor(public request: GetOneDto<DataParameterizationEntity>) {
    super(request)
  }
}
