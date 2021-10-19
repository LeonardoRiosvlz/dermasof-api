import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdLaboratoryExamsInput {
  @Field(() => ID, )  entity__Id: string;
}
