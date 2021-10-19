import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesInput } from './create-files.input';


@InputType()
export class PartialFilesInput extends PartialType(CreateFilesInput) {}

@InputType()
export class UpdateFilesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesInput)  update: PartialFilesInput;

}
