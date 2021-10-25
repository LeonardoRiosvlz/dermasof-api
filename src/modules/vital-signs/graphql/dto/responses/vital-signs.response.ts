import { Field, Float, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class VitalSignsResponse{
  @Field(() => ID) id: string;
  @Field(() => Float) heartRate: number;
  @Field(() => Float) breathingFrequency: number;
  @Field(() => Float) weight: number;
  @Field(() => Float) bloodPressure: number;
  @Field(() => Float) temperature: number;
  @Field(() => Float) saturation: number;
  @Field(() => SolvedEntityResponse, { nullable: true }) patient: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) consultationType: SolvedEntityResponse;
  @Field({nullable: true}) description?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
