
import {ObjectId} from "mongodb";
import { Identifier } from '../../../core/interfaces/IEntity';

export class UniqueEntityID {
  protected value: Identifier;
  constructor(id?: Identifier) {
    this.value = id ? id : new ObjectId().toHexString()
  }

  equals(id?: Identifier): boolean {
    if (id === null || id === undefined) return false;
    return id.toString() === this.toString();
  }

  toString(): string {
    return String(this.value);
  }

  toValue(): Identifier {
    return this.value;
  }


}
