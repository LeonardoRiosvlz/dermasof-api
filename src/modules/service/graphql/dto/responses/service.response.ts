import { Field, Float, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';


@ObjectType()
export class ServiceResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field() code: string;
  @Field((() => Float) ) price: number;
  @Field(() => SolvedEntityResponse, { nullable: true }) category?: SolvedEntityResponse;
  @Field({nullable: true}) description?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
