export type Identifier = string | number;

export interface IEntity {
  id: Identifier;
  createdAt?: Date;
  updatedAt?: Date;
}