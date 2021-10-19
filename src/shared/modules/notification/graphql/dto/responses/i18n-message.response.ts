import { Field, ObjectType } from '@nestjs/graphql';
import { I18nMessage } from '../../../interfaces/IAppNotificationService';

@ObjectType()
export class I18nMessageResponse implements I18nMessage{
  @Field() es: string;
  @Field() en: string;
  @Field({ nullable: true }) de?: string;
  @Field({ nullable: true }) pt?: string;
  @Field({ nullable: true }) it?: string;
  @Field({ nullable: true }) ru?: string;
  @Field({ nullable: true }) fr?: string;
}