import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { ExternalCause, PurposeType } from 'src/modules/clinic-history/entities/clinic-history.entity';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
registerEnumType(ExternalCause, { name: 'ExternalCause' });
registerEnumType(PurposeType, { name: 'PurposeType' });


@ObjectType()
export class ClinicHistoryResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient: SolvedEntityResponse;
  @Field(() => ExternalCause, )  externalCause: ExternalCause;
  @Field(() => PurposeType, )  purposeType: PurposeType;
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
  @Field(() => [SolvedEntityResponse]) diagnosis?: Array<SolvedEntityResponse>;
  @Field(() => [SolvedEntityResponse]) indications?: Array<SolvedEntityResponse>;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
