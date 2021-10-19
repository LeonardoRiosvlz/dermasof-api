import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateOfficeInput } from './create-office.input';


@InputType()
export class PartialOfficeInput extends PartialType(CreateOfficeInput) {}

@InputType()
export class UpdateOfficeInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialOfficeInput)  update: PartialOfficeInput;

}
