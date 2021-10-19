import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateMedicinesInput } from './create-medicines.input';


@InputType()
export class PartialMedicinesInput extends PartialType(CreateMedicinesInput) {}

@InputType()
export class UpdateMedicinesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialMedicinesInput)  update: PartialMedicinesInput;

}
