import { Field, InputType, ID } from '@nestjs/graphql';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';
import { DocumentType, Stratum,MaritalStatus,RegimeType } from 'src/modules/patients/entities/patients.entity';

@InputType()
export class CreatePatientsInput {
  @Field(() => String, {nullable: true} ) lastName: string;
  @Field(() => String, {nullable: true} ) firstName: string;
  @Field(() => String, {nullable: true} ) firstSurName: string;
  @Field(() => String, {nullable: true} ) lastSurName: string;
  @Field(() => String, {nullable: true} ) dateOfBirth: string;
  @Field(() => Gender, {nullable: true} ) gender: Gender;
  @Field(() => DocumentType, )  documentType: DocumentType;
  @Field(() => Stratum, )  stratum?: Stratum;
  @Field(() => MaritalStatus, )  maritalStatus?: MaritalStatus;
  @Field(() => RegimeType, )  regimeType?: RegimeType;
  @Field(() => ID, { nullable: true }) headquarters?: string;
  @Field(() => ID, { nullable: true }) habeasData?: string;
  @Field(() => String, )  documentNumber: string;
  @Field(() => String, {nullable: true} ) country?: string;
  @Field(() => String, {nullable: true} ) city?: string;
  @Field(() => String, {nullable: true} ) department?: string;
  @Field(() => String, {nullable: true} ) phoneNumber: string;
  @Field(() => String, {nullable: true} ) email: string;
  @Field(() => String, {nullable: true} )  occupation?: string;
  @Field(() => String, {nullable: true} )  guardian?: string;
  @Field(() => String, {nullable: true} )  guardianPhone?: string;
  @Field(() => String, {nullable: true} )  relationship?: string;
  @Field(() => ID, { nullable: true }) photoFile?: string;
  @Field(() => ID, { nullable: true }) signature?: string;


}
