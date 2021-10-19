import { IEntity } from 'src/shared/core/interfaces/IEntity';

export type  ModelDef = {
  name: string
  schema?: any
}

export interface IFixture<E extends IEntity, F = ModelDef> {
  target: 'mainDb' | 'tenantDb' | 'both'
  entities: Array<E>  
  feature?: F
}