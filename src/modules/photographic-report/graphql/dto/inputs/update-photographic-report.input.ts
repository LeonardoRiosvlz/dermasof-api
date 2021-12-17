import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreatePhotographicReportInput } from './create-photographic-report.input';


@InputType()
export class PartialPhotographicReportInput extends PartialType(CreatePhotographicReportInput) {}

@InputType()
export class UpdatePhotographicReportInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialPhotographicReportInput)  update: PartialPhotographicReportInput;

}
