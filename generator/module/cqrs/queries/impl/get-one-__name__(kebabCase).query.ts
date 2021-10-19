import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { __name__Entity } from '../../../entities/__name__(kebabCase).entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOne__name__Query extends GetOneQuery<__name__Entity>{
  constructor(public request: GetOneDto<__name__Entity>) {
    super(request)
  }
}
