import { Field, ID,  Int,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { AnesthesiaType, BiopsyMethodType, BiopsyType, DisinfectionType, HaemostasisType } from '../../../entities/clinic-history-procedure.entity';

registerEnumType(AnesthesiaType, { name: 'AnesthesiaType' });
registerEnumType(BiopsyMethodType, { name: 'BiopsyMethodType' });
registerEnumType(BiopsyType, { name: 'BiopsyType' });
registerEnumType(DisinfectionType, { name: 'DisinfectionType' });
registerEnumType(HaemostasisType, { name: 'HaemostasisType' });


@ObjectType()
export class ClinicHistoryProcedureResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) clinicHistory: SolvedEntityResponse;
  @Field(() => Boolean)  isBiopsy: boolean;
  @Field(() => SolvedEntityResponse, { nullable: true }) procedureType?: SolvedEntityResponse;
  @Field(() => Boolean, {nullable: true} )  otherProcedure?: boolean;
  @Field(() => String, {nullable: true} )  otherProcedureDetail?: string;
  @Field(() => DisinfectionType,{nullable: true}  )  disinfectionType?: DisinfectionType;
  @Field(() => String, {nullable: true} )  otherDisinfectionType?: string;
  @Field(() => Boolean, {nullable: true} )  anesthesia?: boolean;
  @Field(() => AnesthesiaType,{nullable: true})  anesthesiaType?: AnesthesiaType;
  @Field(() => String, {nullable: true} )  otherAnesthesiaType?: string;
  @Field(() => BiopsyType,{nullable: true})  biopsyType?: BiopsyType;
  @Field(() => BiopsyMethodType,{nullable: true})  biopsyMethodType?: BiopsyMethodType;
  @Field(() => String, {nullable: true} )  otherBiopsyMethodType?: string;
  @Field(() => Boolean, {nullable: true} )  requiredMargin?: boolean;
  @Field(() => Int, {nullable: true} )  margin?: number;
  @Field(() => [SolvedEntityResponse]) region?: Array<SolvedEntityResponse>;
  @Field(() => HaemostasisType,{nullable: true})  haemostasisType?: HaemostasisType;
  @Field(() => String, {nullable: true} )  otherHaemostasisType?: string;
  @Field(() => Boolean, {nullable: true} )  complications?: boolean;
  @Field(() => String, {nullable: true} )  complicationsDetails?: string;
  @Field(() => String, {nullable: true} )  participants?: string;
  @Field(() => String, {nullable: true} )  comments?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
