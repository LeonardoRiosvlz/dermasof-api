import { Inject, Injectable } from '@nestjs/common';
import { Result } from 'src/shared/core/class/result';

import { NotificationEntity } from '../entities/notification.entity';

import { IAppNotificationService, ICreateNotification } from '../interfaces/IAppNotificationService';
import { AppMailService } from './app-mail.service';
import { NotificationEntityService } from './notification-entity.service';
import { REDIS_PUB_SUB } from '../../graphql/providers/gql-pubsub.provider';
import { PubSubEngine } from 'graphql-subscriptions';
import { AppError } from '../../../core/errors/AppError';
import { IAppCQRSBus } from '../../app-cqrs/interfaces/IAppCQRSBus';
import { UserEntity } from '../../user/entities/user.entity';
import { GetOneUserQuery } from '../../user/cqrs/queries/impl/get-one-user.query';
import { UniqueEntityID } from '../../data-access/mongoose/UniqueEntityID';
import { NotificationEvents } from '../resources/notifications.envents.enum';
import { NotificationMapper } from '../mapper/notification.mapper';
import { LANG_REQUEST } from '../../app-lang/providers/lang.providers';
import { APP_LANG } from '../../../resources/lang.type';
import { I18nUtils } from '../../../utils/i18n.utils';


@Injectable()
export class AppNotificationService implements IAppNotificationService {
  constructor(private readonly _appMailService: AppMailService,
              @Inject(REDIS_PUB_SUB) private readonly _pubSub: PubSubEngine,
              @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
              @Inject(LANG_REQUEST) private readonly _langRequest: APP_LANG,
              private readonly _notificationEntityService: NotificationEntityService,
              private readonly _notificationMapper: NotificationMapper,
  ) {

  }


  async create(params: ICreateNotification): Promise<Result<void>> {
    try {

      const userOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({ where: { id: { eq: params.toUser } } }));
      if (userOrErr.isFailure) {
        return Result.Fail(userOrErr.unwrapError());
      }

      const user = userOrErr.unwrap();


      const notificationEntity: NotificationEntity = {
        id: new UniqueEntityID().toString(),
        toUser: user.id,
        isRead: false,
        message: params.message,
        type: params.type,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const notificationOrErr = await this._notificationEntityService.create(notificationEntity);

      if (notificationOrErr.isFailure) {
        return Result.Fail(notificationOrErr.unwrapError());
      }

      await this._pubSub.publish(NotificationEvents.ON_CREATE_NOTIFICATION,
        { [NotificationEvents.ON_CREATE_NOTIFICATION]: this._notificationMapper.persistent2Dto(notificationEntity) });
      if (params?.options && params.options?.email && params.options.email.active) {

        const { email: { body, subtitle, subject, title } } = params.options;
        const sendOrErr = await this._appMailService.send(user.email,
          {
            subject: I18nUtils.extractMessage(subject, this._langRequest),
            title: I18nUtils.extractMessage(title, this._langRequest),
            subtitle: I18nUtils.extractMessage(subtitle, this._langRequest),
            body: I18nUtils.extractMessage(body, this._langRequest),
          });

        if (sendOrErr.isFailure) {
          return Result.Fail(sendOrErr.unwrapError());
        }
      }

      if (params?.options && params.options?.telegram === true) {
        //@todo implements telegram service and use here
      }

      return Result.Ok();


    } catch (err) {

      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
