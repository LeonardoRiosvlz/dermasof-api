import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';
import { HeadquartersEntity } from 'src/modules/headquarters/entities/headquarters.entity';
import { HabeasDataEntity } from 'src/modules/habeas-data/entities/habeas-data.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';

export enum DocumentType{
  IDENTIFICATION_CARD ='IDENTIFICATION_CARD',
  FOREIGNER_ID ='FOREIGNER_ID',
  PASSPORT ='PASSPORT'
}

export enum Stratum{
  ONE ='ONE',
  TWO ='TWO',
  TREE='TREE',
  FOUR ='FOUR',
  FIVE ='FIVE',
  SIX ='SIX',
  SEVEN='SEVEN',

}
export enum MaritalStatus{
  SINGLE ='SINGLE',
  MARRIED ='MARRIED',
  FREE_UNION='FREE_UNION',
  WIDOWER ='WIDOWER',
}

export enum RegimeType{
  SUBSIDIZED ='SUBSIDIZED',
  LINKED ='LINKED',
  CONTRIBUTORY ='CONTRIBUTORY',
}

@Schema({ ...SchemaConstants, collection: 'patients' })
export class PatientsEntity extends PersistentEntity {
  @Prop() lastName: string;
  @Prop() firstName: string;
  @Prop() firstSurName: string;
  @Prop() lastSurName: string;
  @Prop() dateOfBirth: string;
  @Prop({type:String}) gender: Gender;
  @Prop({type:String}) documentType: DocumentType;
  @Prop({type:String}) maritalStatus?: MaritalStatus;
  @Prop({type:String}) regimeType?: RegimeType;
  @Prop() documentNumber: string;
  @Prop() phoneNumber: string;
  @Prop() country?: string;
  @Prop() city?: string;
  @Prop() department?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => HeadquartersEntity}) headquarters?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => HabeasDataEntity}) habeasData?: string;
  @Prop() occupation?: string;
  @Prop({type:String}) stratum?: Stratum;
  @Prop() guardian?: string;
  @Prop() guardianPhone?: string;
  @Prop() relationship?: string;
  @Prop() email: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) photoFile?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) signature?: string;

}

export const PatientsSchema = SchemaFactory.createForClass(PatientsEntity);

export const PatientsFeature = {
  name: PatientsEntity.name,
  schema: PatientsSchema,
};
