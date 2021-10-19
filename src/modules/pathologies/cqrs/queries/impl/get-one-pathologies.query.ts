import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOnePathologiesQuery extends GetOneQuery<PathologiesEntity>{
  constructor(public request: GetOneDto<PathologiesEntity>) {
    super(request)
  }
}
