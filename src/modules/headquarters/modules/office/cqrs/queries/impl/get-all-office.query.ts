import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { OfficeEntity } from '../../../entities/office.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllOfficeQuery extends GetAllQuery<OfficeEntity>{
  constructor(public request: GetAllDto<OfficeEntity>) {
    super(request)
  }
}
