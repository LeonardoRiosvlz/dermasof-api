import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAll__name__Query extends GetAllQuery<__name__Entity>{
  constructor(public request: GetAllDto<__name__Entity>) {
    super(request)
  }
}
