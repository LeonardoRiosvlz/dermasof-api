import { Field, ID,  ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserPositionResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field({nullable: true}) description?: string;
  @Field(() => Boolean) isActive: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
