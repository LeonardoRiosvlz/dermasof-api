import {UserRepository} from "./user.repository";
import {Connection} from "mongoose";
import { IUserRepositoryFactory } from '../interfaces/IUserRepositoryFactory';
import { UserEntity, UserFeature } from '../entities/user.entity';


export class UserRepositoryFactory
  implements IUserRepositoryFactory {
  build(connection: Connection): UserRepository {
    return new UserRepository(
      connection.model<UserEntity>(UserFeature.name, UserFeature.schema),
    );
  }
}
