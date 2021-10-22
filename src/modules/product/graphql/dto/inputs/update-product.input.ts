import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';


@InputType()
export class PartialProductInput extends PartialType(CreateProductInput) {}

@InputType()
export class UpdateProductInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialProductInput)  update: PartialProductInput;

}
