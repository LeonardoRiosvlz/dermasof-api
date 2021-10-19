import { IEntity } from 'src/shared/core/interfaces/IEntity';
import { IMapper } from '../interfaces/IMapper';
import { BaseInput } from '../../dto/base-input.dto';
import { BaseResponse } from '../../dto/base-response.dto';

export abstract class BaseMapper<E extends IEntity> implements IMapper<E> {
  static build<T extends IEntity>(): IMapper<T> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new this.prototype();
  }

  persistent2Dto(persistentEntity: E): any {
    throw new Error('Implements me in Subclass');
  }

  dtoInput2Persistent<DTO extends BaseInput>(dto: DTO): E {
    throw new Error('Implements me in Subclass');
  }


  dtoResponse2Persistent<DTO extends BaseResponse>(dto: DTO): E {
    throw new Error('Implements me in Subclass');
  }


}

