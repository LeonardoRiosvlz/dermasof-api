import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreatePatientDataSettingsInput {
  @Field(() => Boolean, { nullable: true, defaultValue: true }) firstName?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) lastName?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) firstSurname?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) lastSurname?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) dateOfBirth?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) gender?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) maritalStatus?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) bloodType?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) vitalStatus?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) contactInformation?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) landlinePhoneNumber?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) phoneNumber?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) patientHeadquarters?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) mainAddress?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) secondaryHeadquarters?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) countryDepartmentCity?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) email?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) socialSecurity?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) affiliateType?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) affiliateTypeSsg?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) educationLevel?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) ethnicGroup?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) populationGroup?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) occupation?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) eps?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) affiliateDate?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) prepaid?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) benefitPlan?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) healthCareProgram?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) generalNotesAttention?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) contractNumber?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) occupationalRiskManagement?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) pensionFundManagement?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) companion?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) companionName?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) kinshipCompanion?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) companionPhone?: boolean;
}
