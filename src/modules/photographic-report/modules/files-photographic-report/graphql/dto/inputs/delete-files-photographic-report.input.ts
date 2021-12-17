import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesPhotographicReportInput {
  @Field(() => ID, )  entityId: string;
}
