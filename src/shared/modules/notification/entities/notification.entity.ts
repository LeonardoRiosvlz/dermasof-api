import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';

import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { I18nMessageEntity } from './schema/i18n-message.schema';
import { NotificationType } from '../interfaces/IAppNotificationService';


@Schema({ ...SchemaConstants, collection: 'notification' })
export class NotificationEntity extends PersistentEntity {
  @Prop({type: I18nMessageEntity}) message: I18nMessageEntity;
  @Prop() isRead: boolean;
  @Prop({ type: String }) type: NotificationType;
  @Prop({ type: MSchema.Types.ObjectId }) toUser: string;
}

export const NotificationSchema = SchemaFactory.createForClass(NotificationEntity);

export const NotificationFeature = {
  name: NotificationEntity.name,
  schema: NotificationSchema,
};
