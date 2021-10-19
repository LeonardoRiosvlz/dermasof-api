import { IEntity } from 'src/shared/core/interfaces/IEntity';

export abstract class PersistentEntity
  implements IEntity {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}
