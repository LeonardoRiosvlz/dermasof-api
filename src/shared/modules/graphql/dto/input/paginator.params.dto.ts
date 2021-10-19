import { Field, Int, InputType, registerEnumType } from '@nestjs/graphql';
import { IPaginatorParams } from 'src/shared/core/interfaces/IPaginatorParams';


export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

registerEnumType(SortDirection, {
  name: 'SortDirection',
});

@InputType()
export class PaginatorParams implements IPaginatorParams {
  @Field(type => Int, { nullable: true }) page?: number;
  @Field(type => Int, { nullable: true }) limit?: number;
}



