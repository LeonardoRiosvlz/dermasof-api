import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
@ObjectType()
export class HeadquartersResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field() code: string;
  @Field() city: string;
  @Field() email: string;
  @Field() phoneNumber: string;
  @Field() address: string;
  @Field(() => SolvedEntityResponse) manager: SolvedEntityResponse;
  @Field() isActive?: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
