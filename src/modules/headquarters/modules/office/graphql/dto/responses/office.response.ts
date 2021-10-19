import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { OfficeType } from '../../../entities/office.entity';
registerEnumType(OfficeType, { name: 'OfficeType' });

@ObjectType()
export class OfficeResponse{
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field(()=>OfficeType) officeType: OfficeType;
  @Field({nullable: true}) description?: string;
  @Field() isActive?: boolean;
  @Field(() => SolvedEntityResponse ) floor: SolvedEntityResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
