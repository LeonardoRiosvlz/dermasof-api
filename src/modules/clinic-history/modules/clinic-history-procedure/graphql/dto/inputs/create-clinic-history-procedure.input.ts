import { Field, InputType, ID, Int } from '@nestjs/graphql';
import { AnesthesiaType, BiopsyMethodType, BiopsyType, DisinfectionType, HaemostasisType } from '../../../entities/clinic-history-procedure.entity';

@InputType()
export class CreateClinicHistoryProcedureInput {
  @Field(() => ID, {nullable: true}) clinicHistory: string;
  @Field(() => Boolean )  isBiopsy: boolean;
  @Field(() => ID, {nullable: true}) procedureType?: string;
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
  @Field(() => [ID], {nullable: true}) region?: Array<string>;
  @Field(() => HaemostasisType,{nullable: true})  haemostasisType?: HaemostasisType;
  @Field(() => String, {nullable: true} )  otherHaemostasisType?: string;
  @Field(() => Boolean, {nullable: true} )  complications?: boolean;
  @Field(() => String, {nullable: true} )  complicationsDetails?: string;
  @Field(() => String, {nullable: true} )  participants?: string;
  @Field(() => String, {nullable: true} )  comments?: string;
}
