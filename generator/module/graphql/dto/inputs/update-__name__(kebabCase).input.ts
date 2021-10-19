import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { Create__name__Input } from './create-__name__(kebabCase).input';


@InputType()
export class Partial__name__Input extends PartialType(Create__name__Input) {}

@InputType()
export class Update__name__Input {
  @Field(() => ID, )  entityId: string;
  @Field(() => Partial__name__Input)  update: Partial__name__Input;

}
