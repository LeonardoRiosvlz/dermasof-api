import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';


export enum DocumentType{
  IDENTIFICATION_CARD ='IDENTIFICATION_CARD',
  FOREIGNER_ID ='FOREIGNER_ID',
  PASSPORT ='PASSPORT'
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
  @Prop() documentNumber: string;
  @Prop() phoneNumber: string;
  @Prop() email: string;
}

export const PatientsSchema = SchemaFactory.createForClass(PatientsEntity);

export const PatientsFeature = {
  name: PatientsEntity.name,
  schema: PatientsSchema,
};
