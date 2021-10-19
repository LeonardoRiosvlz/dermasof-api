import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { UserAreaEntity } from '../../modules/user-area/entities/user-area.entity';
import { UserPositionEntity } from '../../modules/user-position/entities/user-position.entity';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  TRANS_GENDER = 'TRANS_GENDER',
  NOT_SPECIFIED = 'NOT_SPECIFIED'
}


export class ProfileEntity {
  @Prop({ _id: false })
  @Prop() country?: string;
  @Prop({ default: Gender.NOT_SPECIFIED, type: String }) gender?: Gender;
  @Prop() zipCode?: string;
  @Prop() city?: string;
  @Prop() address?: string;
  @Prop() state?: string;
  @Prop() birthDay?: string;
  @Prop() personalWeb?: string;
  @Prop() btcWallet?: string;
  @Prop() tronWallet?: string;
  @Prop() phoneNumber?: string;
  @Prop() isLeader?: boolean;
  @Prop() aboutMe?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => UserAreaEntity} ) area?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => UserPositionEntity} ) position?: string;

}

export const ProfileSchema = SchemaFactory.createForClass(ProfileEntity);

export const ProfileFeature:ModelDefinition = {
  name: ProfileEntity.name,
  schema: ProfileSchema,
};
