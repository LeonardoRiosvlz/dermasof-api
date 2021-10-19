import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateProceduresInput } from './create-procedures.input';


@InputType()
export class PartialProceduresInput extends PartialType(CreateProceduresInput) {}

@InputType()
export class UpdateProceduresInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialProceduresInput)  update: PartialProceduresInput;

}
