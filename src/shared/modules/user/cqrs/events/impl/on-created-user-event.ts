import { AppEvent } from 'src/shared/modules/app-cqrs/base/AppEvent';
import { UserEntity } from '../../../entities/user.entity';

export class OnCreatedUserEvent extends AppEvent {
  constructor(public readonly request: UserEntity) {
    super();
  }
}