import { IEntity } from './IEntity';
import { BaseInput } from '../../dto/base-input.dto';
import { BaseResponse } from '../../dto/base-response.dto';


export interface IMapper<Entity extends IEntity> {
  persistent2Dto(persistentEntity: Entity): any;
  dtoInput2Persistent<DTO>(dto: DTO): Entity;
  dtoResponse2Persistent<DTO>(dto: DTO): Entity;
}



