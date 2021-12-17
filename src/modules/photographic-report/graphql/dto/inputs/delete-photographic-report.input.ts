import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeletePhotographicReportInput {
  @Field(() => ID, )  entityId: string;
}
