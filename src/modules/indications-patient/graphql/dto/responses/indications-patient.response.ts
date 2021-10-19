import { Field, ID,  ObjectType } from '@nestjs/graphql';

@ObjectType()
export class IndicationsPatientResponse{
  @Field(() => ID) id: string;
  @Field() description: string;
  @Field() isActive?: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
