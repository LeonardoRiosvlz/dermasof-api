import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateInformedConsentInput } from './create-informed-consent.input';


@InputType()
export class PartialInformedConsentInput extends PartialType(CreateInformedConsentInput) {}

@InputType()
export class UpdateInformedConsentInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialInformedConsentInput)  update: PartialInformedConsentInput;

}
