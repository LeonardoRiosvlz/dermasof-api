import { Args, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { NotificationResponse } from '../dto/responses/notification.response';
import { GetAllNotificationInput } from '../dto/inputs/get-all-notification.input';
import { DeleteNotificationInput } from '../dto/inputs/delete-notification.input';
import { DeleteNotificationCommand } from '../../cqrs/commands/impl/delete-notification.command';
import { GetAllNotificationQuery } from '../../cqrs/queries/impl/get-all-notification.query';
import { NotificationMapper } from '../../mapper/notification.mapper';
import { UpdateNotificationInput } from '../dto/inputs/update-notification.input';
import { UpdateNotificationCommand } from '../../cqrs/commands/impl/update-notification.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedNotificationInput } from '../dto/inputs/get-paginated-notification.input';
import { PaginatedNotificationResponse } from '../dto/responses/paginated-notification.response';
import { GetPaginatedNotificationQuery } from '../../cqrs/queries/impl/get-paginated-notification.query';
import { GetOneNotificationInput } from '../dto/inputs/get-one-notification.input';
import { GetOneNotificationQuery } from '../../cqrs/queries/impl/get-one-notification.query';
import { DeleteManyNotificationInput } from '../dto/inputs/delete-many-notification.input';
import { DeleteManyNotificationCommand } from '../../cqrs/commands/impl/delete-many-notification.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { NotificationEntity } from '../../entities/notification.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from '../../../graphql/dto/responses/solved-entity.response';
import { UserEntity } from '../../../user/entities/user.entity';
import { GetOneUserQuery } from '../../../user/cqrs/queries/impl/get-one-user.query';
import { NotificationEvents } from '../../resources/notifications.envents.enum';
import { REDIS_PUB_SUB } from '../../../graphql/providers/gql-pubsub.provider';
import { PubSubEngine } from 'graphql-subscriptions';
import { CurrentUser } from '../../../auth/decorators/current-user.decorator';
import { AuthUser } from '../../../auth/types/auth-user.type';
import { SendNotificationCommand } from '../../cqrs/commands/impl/send-notification.command';
import { NotificationType } from '../../interfaces/IAppNotificationService';


@Resolver(() => NotificationResponse)
export class NotificationResolver extends BaseResolver {
  constructor(
    private readonly _notificationMapper: NotificationMapper,
    @Inject(REDIS_PUB_SUB) private readonly _pubSub: PubSubEngine,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }


  @UseGuards(GqlAuthGuard)
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateNotification(
    @Args('input') { update, entityId }: UpdateNotificationInput,
    @CurrentUser() user: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateNotificationCommand(entityId, update));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteNotification(
    @Args('input') { entityId }: DeleteNotificationInput,
    @CurrentUser() user: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteNotificationCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyNotification(
    @Args('input') { where }: DeleteManyNotificationInput,
    @CurrentUser() user: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyNotificationCommand({
      where: {
        ...where, id: { eq: user.userId },
      },
    }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Query(() => [NotificationResponse], { nullable: true })
  async getAllNotification(
    @Args('input', { nullable: true }) { where, orderBy }: GetAllNotificationInput,
    @CurrentUser() user: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<NotificationResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<NotificationEntity>>>(new GetAllNotificationQuery({
      where: {
        ...where, toUser: { eq: user.userId },
      }, orderBy,
    }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._notificationMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => NotificationResponse, { nullable: true })
  async getOneNotification(
    @Args('input', { nullable: true }) { where }: GetOneNotificationInput,
    @CurrentUser() user: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<NotificationResponse> {
    const resp = await this._cqrsBus.execQuery<Result<NotificationEntity>>(new GetOneNotificationQuery({
      where: {
        ...where,
        id: { eq: user.userId },
      },
    }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._notificationMapper.persistent2Dto(resp.unwrap());
  }


  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Query(() => PaginatedNotificationResponse, { nullable: true })
  async getPaginatedNotification(
    @Args('input', { nullable: true }) { paginator, where, orderBy }: GetPaginatedNotificationInput,
    @CurrentUser() user: AuthUser,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedNotificationResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<NotificationEntity>>>(new GetPaginatedNotificationQuery({
      where: {
        ...where,
        id: { eq: user.userId },
      },
      paginator,
      orderBy,
    }));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._notificationMapper.persistent2Dto),
    };
  }


  @UseGuards(GqlAuthGuard)
  @Mutation(() => GraphQLVoid, {
    nullable: true,
  })
  async sendNotification(@CurrentUser() user: AuthUser,
                         @CurrentLanguage() lang?: string): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new SendNotificationCommand({
      toUser: user.userId,
      message: {
        es: 'Hola mundo',
        en: 'Hello World',
      },
      type: NotificationType.INTERNAL,
      options: {
        email: {
          active: true,
          subject: {
            es: 'Subject en Español',
            en: 'Subject en Inglés',
          },
          title: {
            es: 'Title en Español',
            en: 'Title en Inglés',
          },

          subtitle: {
            es: 'Subtitle en Español',
            en: 'Subtitle en Inglés',
          },

          body: {
            es: 'Cuerpo del correo en Español',
            en: 'Cuerpo del correo en Inglés',
          },
        },
      },

    }));

    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);

  }


  @Subscription(() => NotificationResponse, {
    nullable: true,
    filter: (payload, { toUser }) =>
      payload[NotificationEvents.ON_CREATE_NOTIFICATION].toUser.id === toUser,
  })
  [NotificationEvents.ON_CREATE_NOTIFICATION](@Args('toUser') _: string,
  ): AsyncIterator<NotificationResponse> {
    return this._pubSub.asyncIterator<NotificationResponse>(NotificationEvents.ON_CREATE_NOTIFICATION);
  }


  @ResolveField(() => SolvedEntityResponse, { nullable: true })
  async toUser(@Parent() parent?: NotificationResponse): Promise<SolvedEntityResponse> {
    if (parent?.toUser) {
      const userOrErr = await this._cqrsBus.execQuery<Result<UserEntity>>(new GetOneUserQuery({
        where: {
          id: { eq: parent.toUser.id },
        },
      }));
      if (userOrErr.isFailure) {
        return null;
      }

      return {
        id: userOrErr.unwrap().id,
        entityName: UserEntity.name,
        identifier: userOrErr.unwrap().email,
        fields: [
          {
            field: 'username',
            value: userOrErr.unwrap().username,
          }],
      };
    }
  }


}
