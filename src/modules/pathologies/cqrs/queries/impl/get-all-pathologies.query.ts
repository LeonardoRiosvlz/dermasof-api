import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { PathologiesEntity } from '../../../entities/pathologies.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllPathologiesQuery extends GetAllQuery<PathologiesEntity>{
  constructor(public request: GetAllDto<PathologiesEntity>) {
    super(request)
  }
}
