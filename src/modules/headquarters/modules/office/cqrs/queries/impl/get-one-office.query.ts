import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { OfficeEntity } from '../../../entities/office.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneOfficeQuery extends GetOneQuery<OfficeEntity>{
  constructor(public request: GetOneDto<OfficeEntity>) {
    super(request)
  }
}
