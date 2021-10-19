import { Field, InputType, ID } from '@nestjs/graphql';
import { OfficeType } from '../../../entities/office.entity';



@InputType()
export class CreateOfficeInput {
  @Field(() => String, )  name: string;
  @Field(() => OfficeType, )  officeType: OfficeType;
  @Field(() => ID, )  floor: string;
  @Field() isActive?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
}
