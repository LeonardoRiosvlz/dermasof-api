import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateServiceCategoryInput } from './create-service-category.input';


@InputType()
export class PartialServiceCategoryInput extends PartialType(CreateServiceCategoryInput) {}

@InputType()
export class UpdateServiceCategoryInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialServiceCategoryInput)  update: PartialServiceCategoryInput;

}
