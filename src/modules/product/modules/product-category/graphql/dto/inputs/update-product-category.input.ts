import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateProductCategoryInput } from './create-product-category.input';


@InputType()
export class PartialProductCategoryInput extends PartialType(CreateProductCategoryInput) {}

@InputType()
export class UpdateProductCategoryInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialProductCategoryInput)  update: PartialProductCategoryInput;

}
