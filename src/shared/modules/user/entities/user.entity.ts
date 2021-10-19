import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { RoleEntity } from '../modules/role/entities/role.entity';
import { ProfileEntity } from './schemas/profile.schema';
import { FilesEntity } from '../../files/entities/files.entity';


@Schema({ ...SchemaConstants, collection: 'users' })

export class UserEntity extends PersistentEntity {
  @Prop({ unique: true }) email: string;
  @Prop({ unique: true }) username: string;
  @Prop() lastLogin?: Date;
  @Prop({ minlength: 6 }) password: string;
  @Prop({ default: false }) verified: boolean;
  @Prop() isActive: boolean;
  @Prop() isAdmin: boolean;
  @Prop({ type: [{ type: MSchema.Types.ObjectId, ref: () => RoleEntity }] }) roles?: Array<string>;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) avatarFile?: string;
  @Prop() firstname: string;
  @Prop() lastname?: string;
  @Prop({ type: ProfileEntity }) profile?: ProfileEntity;


}

export const UserSchema = SchemaFactory.createForClass(UserEntity);

export const UserFeature: ModelDefinition = {
  name: UserEntity.name,
  schema: UserSchema,
};

