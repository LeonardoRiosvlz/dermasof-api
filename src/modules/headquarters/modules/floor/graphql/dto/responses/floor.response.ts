import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class FloorResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field(()=>Int ) location: number;
  @Field({nullable: true}) description?: string;
  @Field(() => Boolean) isActive: boolean;
  @Field(() => SolvedEntityResponse, ) headquarter: SolvedEntityResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
