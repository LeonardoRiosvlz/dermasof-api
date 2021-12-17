import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class ClinicHistoryDiagnosisResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) clinicHistory: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) diagnosisType: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) diagnosis: SolvedEntityResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
