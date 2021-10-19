import { Field, ID,  ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DiagnosisResponse{
  @Field(() => ID) id: string;
  @Field() code: string;
  @Field({nullable: true}) description?: string;
  @Field() isActive?: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
