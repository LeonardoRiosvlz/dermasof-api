import { Field, InputType, ID } from '@nestjs/graphql';
import { ClinicHistoryType, ExternalCause, PurposeType } from 'src/modules/clinic-history/entities/clinic-history.entity';

@InputType()
export class CreateClinicHistoryInput {
  @Field(() => ID, {nullable: true}) patient: string;
  @Field(() => ExternalCause, )  externalCause: ExternalCause;
  @Field(() => PurposeType, )  purposeType: PurposeType;
  @Field(() => ClinicHistoryType, )  clinicHistoryType: ClinicHistoryType;
  @Field(() => String, )  otherHistory: string;
  @Field(() => String, )  reasonForConsultation: string;
  @Field(() => String, )  familyHistory: string;
  @Field(() => String, )  pharmacologicalHistory: string;
  @Field(() => String, )  allergicHistory: string;
  @Field(() => String, )  surgicalHistory: string;
  @Field(() => String, )  medicalHistory: string;
  @Field(() => String, )  currentIllness: string;
  @Field(() => String, )  systemsReview: string;
  @Field(() => String, )  physicalExam: string;
  @Field(() => String, )  analysis: string;
  @Field(() => String, {nullable: true} )  observations?: string;
  @Field(() => Boolean )  sendDirectionsToWhatsapp: boolean;
  @Field(() => Boolean )  sendDirectionsTheMail: boolean;
}
