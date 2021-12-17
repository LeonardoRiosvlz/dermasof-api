import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ClinicHistoryEntity } from 'src/modules/clinic-history/entities/clinic-history.entity';
import { ProceduresModule } from 'src/modules/procedures/procedures.module';

export enum DisinfectionType{
  SSN ='SSN',
  ALCOHOL ='ALCOHOL',
  IODOPOVIDONE ='IODOPOVIDONE',
  CHLORHEXIDINE ='CHLORHEXIDINE',
  OTHER ='OTHER',
}
export enum AnesthesiaType{
  LIDOCAINE_1_WITH_EPINEPHRINE = 'LIDOCAINE_1_WITH_EPINEPHRINE',
  LIDOCAINE_1_WITHOUT_EPINEPHRINE = 'LIDOCAINE_1_WITHOUT_EPINEPHRINE',
  LIDOCAINE_2_WITH_EPINEPHRINE = 'LIDOCAINE_2_WITH_EPINEPHRINE',
  LIDOCAINE_2_WITHOUT_EPINEPHRINE = 'LIDOCAINE_2_WITHOUT_EPINEPHRINE',
  TOPIC ='TOPIC',
  OTHER ='OTHER',
}
export enum BiopsyType{
  INCISIONAL = 'INCISIONAL',
  EXCISIONAL = 'EXCISIONAL',
}
export enum BiopsyMethodType{
  PUNCH = 'PUNCH',
  SCALPEL = 'SCALPEL',
  SHAVED_OFF = 'SHAVED_OFF',
  CURETING = 'CURETING',
  SCISSOR = 'SCISSOR',
  CAUTERIZATION = 'CAUTERIZATION',
  OTHER ='OTHER',
}
export enum HaemostasisType{
  NO = 'NO',
  CHEMICAL = 'CHEMICAL',
  HYFRECATOR = 'HYFRECATOR',
  PUNELLMANCH = 'ELLMAN',
  SUTURE = 'SUTURE',
  OTHER = 'OTHER',
}

@Schema({ ...SchemaConstants, collection: 'clinic-history-procedure' })
export class ClinicHistoryProcedureEntity extends PersistentEntity {

  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClinicHistoryEntity}) clinicHistory: string;
  @Prop() isBiopsy: boolean;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ProceduresModule}) procedureType?: string;
  @Prop() otherProcedure?: boolean;
  @Prop() otherProcedureDetail?: string;
  @Prop({type:String}) disinfectionType?: DisinfectionType;
  @Prop() otherDisinfectionType?: string;
  @Prop() anesthesia?: boolean;
  @Prop({type:String}) anesthesiaType?: AnesthesiaType;
  @Prop() otherAnesthesiaType?: string;
  @Prop({type:String}) biopsyType?: BiopsyType;
  @Prop({type:String}) biopsyMethodType?: BiopsyMethodType;
  @Prop() otherBiopsyMethodType?: string;
  @Prop() requiredMargin?: boolean;
  @Prop() margin?: number;
  @Prop({ type: [{ type: MSchema.Types.ObjectId }] }) region?: Array<string>;
  @Prop({type:String}) haemostasisType?: HaemostasisType;
  @Prop() otherHaemostasisType?: string;
  @Prop() complications?: boolean;
  @Prop() complicationsDetails?: string;
  @Prop() participants?: string;
  @Prop() comments?: string;
} 

export const ClinicHistoryProcedureSchema = SchemaFactory.createForClass(ClinicHistoryProcedureEntity);

export const ClinicHistoryProcedureFeature = {
  name: ClinicHistoryProcedureEntity.name,
  schema: ClinicHistoryProcedureSchema,
};
