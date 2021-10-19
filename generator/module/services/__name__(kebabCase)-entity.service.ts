import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { __name__Entity } from '../entities/__name__(kebabCase).entity';
import { __name__Repository } from '../repositories/__name__(kebabCase).repository';


@Injectable()
export class __name__EntityService extends BaseEntityService<__name__Entity> {
  constructor(private readonly ___name__CamelCase__Repo: __name__Repository) {
    super(___name__CamelCase__Repo, __name__Entity.name);
  }




}
