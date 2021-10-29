import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PatientsEntity } from 'src/modules/patients//entities/patients.entity';
import { Schema as MSchema } from 'mongoose';

export enum ExternalCause{
  GENERAL_ILLNESS='GENERAL_ILLNESS',
  PROFESSIONAL_ILLNESS='PROFESSIONAL_ILLNESS',
  WORK_ACCIDENT='WORK_ACCIDENT',
  CAR_ACCIDENT='CAR_ACCIDENT',
  DOG_ACCIDENT='DOG_ACCIDENT',
  ACCIDENT_WITH_SNAKES='ACCIDENT_WITH_SNAKES',
  ANOTHER_TYPE='ANOTHER_TYPE',
  CATASTROPHIC_EVENT='CATASTROPHIC_EVENT',
  ASSAULT_INJURY='ASSAULT_INJURY',
  SELF_INFLUENCED_INJURY='SELF_INFLUENCED_INJURY',
  SUSPECTED_PHYSICAL_ABUSE='SUSPECTED_PHYSICAL_ABUSE',
  SUSPECTED_SEXUAL_ABUSE='SUSPECTED_SEXUAL_ABUSE',
  SUSPECTED_SEXUAL_VIOLENCE='SUSPECTED_SEXUAL_VIOLENCE',
  SUSPECTED_EMOTIONAL_ABUSE='SUSPECTED_EMOTIONAL_ABUSE',
  OTHER='OTHER',
  NONE='NONE',
}

export enum PurposeType{
  NONE='NONE',
  BIRTH_CARE='BIRTH_CARE',
  NEWBORN_CARE='NEWBORN_CARE',
  FAMILY_PLANNER_ATTENTION='FAMILY_PLANNER_ATTENTION',
  DETECTION_OF_ALTERATION_OF_GROWTH_AND_DEVELOPMENT='DETECTION_OF_ALTERATION_OF_GROWTH_AND_DEVELOPMENT',
  DETECTION_OF_ALTERATION_OF_YOUNG_DEVELOPMENT='DETECTION_OF_ALTERATION_OF_YOUNG_DEVELOPMENT',
  PREGNANCY_ALTERATION_DETECTION='PREGNANCY_ALTERATION_DETECTION',
  DETECTION_ALTERATION_OF_ADULT_DEVELOPMENT='DETECTION_ALTERATION_OF_ADULT_DEVELOPMENT',
  DETETCTION_VISUAL_ACUITY_DISTURBANCE='DETECTION_VISUAL_ACUITY_DISTURBANCE',
  DETECTION_OF_OCCUPATIONAL_DISEASE='DETECTION_OF_OCCUPATIONAL_DISEASE',
  DOES_NOT_APPLY='DOES_NOT_APPLY',
}

@Schema({ ...SchemaConstants, collection: 'clinic-history' })
export class ClinicHistoryEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => PatientsEntity}) patient: string;
  @Prop({type:String}) externalCause: ExternalCause;
  @Prop({type:String}) purposeType: PurposeType;
  @Prop() otherHistory: string;
  @Prop() familyHistory: string;
  @Prop() pharmacologicalHistory: string;
  @Prop() allergicHistory: string;
  @Prop() surgicalHistory: string;
  @Prop() medicalHistory: string;
  @Prop() reasonForConsultation: string;
  @Prop() currentIllness: string;
  @Prop() systemsReview: string;
  @Prop() physicalExam: string;
  @Prop() analysis: string;
  @Prop() observations?: string;
  @Prop() sendDirectionsToWhatsapp: boolean;
  @Prop() sendDirectionsTheMail: boolean;
  @Prop({ type: [{ type: MSchema.Types.ObjectId }] }) diagnosis?: Array<string>;
  @Prop({ type: [{ type: MSchema.Types.ObjectId }] }) indications?: Array<string>;
}

export const ClinicHistorySchema = SchemaFactory.createForClass(ClinicHistoryEntity);

export const ClinicHistoryFeature = {
  name: ClinicHistoryEntity.name,
  schema: ClinicHistorySchema,
};
