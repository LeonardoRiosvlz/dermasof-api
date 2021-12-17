import { Field, InputType, ID } from '@nestjs/graphql';
import { GenderType } from 'src/modules/region/entities/region.entity';

@InputType()
export class CreateRegionInput {
  @Field(() => String, )  name: string;
  @Field(() => ID, { nullable: true }) photoFile?: string;
  @Field(() => GenderType, )  gender: GenderType;
}
