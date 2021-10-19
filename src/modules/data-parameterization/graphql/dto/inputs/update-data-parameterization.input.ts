import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateDataParameterizationInput } from './create-data-parameterization.input';


@InputType()
export class PartialDataParameterizationInput extends PartialType(CreateDataParameterizationInput) {}

@InputType()
export class UpdateDataParameterizationInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialDataParameterizationInput)  update: PartialDataParameterizationInput;

}
