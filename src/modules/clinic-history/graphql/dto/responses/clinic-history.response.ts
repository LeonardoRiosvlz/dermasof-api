import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { ClinicHistoryType, ExternalCause, PurposeType } from 'src/modules/clinic-history/entities/clinic-history.entity';

import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
registerEnumType(ExternalCause, { name: 'ExternalCause' });
registerEnumType(PurposeType, { name: 'PurposeType' });
registerEnumType(ClinicHistoryType, { name: 'ClinicHistoryType' });

@ObjectType()
export class ClinicHistoryResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient: SolvedEntityResponse;
  @Field(() => ExternalCause, )  externalCause: ExternalCause;
  @Field(() => PurposeType, )  purposeType: PurposeType;
  @Field(() => ClinicHistoryType, )  clinicHistoryType: ClinicHistoryType;
  @Field() otherHistory: string;
  @Field() familyHistory: string;
  @Field() pharmacologicalHistory: string;
  @Field() allergicHistory: string;
  @Field() surgicalHistory: string;
  @Field() medicalHistory: string;
  @Field() reasonForConsultation: string;
  @Field() currentIllness: string;
  @Field() systemsReview: string;
  @Field() physicalExam: string;
  @Field() analysis: string;
  @Field({nullable: true}) observations?: string;
  @Field(()=>Boolean ) sendDirectionsToWhatsapp: boolean;
  @Field(()=>Boolean ) sendDirectionsTheMail: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
