import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesPhotographicReportInput } from './create-files-photographic-report.input';


@InputType()
export class PartialFilesPhotographicReportInput extends PartialType(CreateFilesPhotographicReportInput) {}

@InputType()
export class UpdateFilesPhotographicReportInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesPhotographicReportInput)  update: PartialFilesPhotographicReportInput;

}
