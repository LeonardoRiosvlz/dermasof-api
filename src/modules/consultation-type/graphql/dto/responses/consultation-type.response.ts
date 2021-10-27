import { Field, ID,  ObjectType ,Int } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response'; 

@ObjectType()
export class ConsultationTypeResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field(()=> Int) duration: number;
  @Field({nullable: true}) description?: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) service: SolvedEntityResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
