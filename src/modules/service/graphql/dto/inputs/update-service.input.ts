import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateServiceInput } from './create-service.input';


@InputType()
export class PartialServiceInput extends PartialType(CreateServiceInput) {}

@InputType()
export class UpdateServiceInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialServiceInput)  update: PartialServiceInput;

}
