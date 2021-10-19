import { Field, ID,  ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PatientDataSettingsResponse{
  @Field(() => ID) id: string;
  @Field(() => Boolean)  firstName?: boolean;
	@Field(() => Boolean)  lastName?: boolean;
	@Field(() => Boolean)  firstSurname?: boolean;
	@Field(() => Boolean)  lastSurname?: boolean;
	@Field(() => Boolean)  dateOfBirth?: boolean;
	@Field(() => Boolean)  gender?: boolean;
	@Field(() => Boolean)  maritalStatus?: boolean;
	@Field(() => Boolean)  bloodType?: boolean;
	@Field(() => Boolean)  vitalStatus?: boolean;
	@Field(() => Boolean)  contactInformation?: boolean;
	@Field(() => Boolean)  landlinePhoneNumber?: boolean;
	@Field(() => Boolean)  phoneNumber?: boolean;
	@Field(() => Boolean)  patientHeadquarters?: boolean;
	@Field(() => Boolean)  mainAddress?: boolean;
	@Field(() => Boolean)  secondaryHeadquarters?: boolean;
	@Field(() => Boolean)  countryDepartmentCity?: boolean;
	@Field(() => Boolean)  email?: boolean;
	@Field(() => Boolean)  socialSecurity?: boolean;
	@Field(() => Boolean)  affiliateType?: boolean;
	@Field(() => Boolean)  affiliateTypeSsg?: boolean;
	@Field(() => Boolean)  educationLevel?: boolean;
	@Field(() => Boolean)  ethnicGroup?: boolean;
	@Field(() => Boolean)  populationGroup?: boolean;
	@Field(() => Boolean)  occupation?: boolean;
	@Field(() => Boolean)  eps?: boolean;
	@Field(() => Boolean)  affiliateDate?: boolean;
	@Field(() => Boolean)  prepaid?: boolean;
	@Field(() => Boolean)  benefitPlan?: boolean;
	@Field(() => Boolean)  healthCareProgram?: boolean;
	@Field(() => Boolean)  generalNotesAttention?: boolean;
	@Field(() => Boolean)  contractNumber?: boolean;
	@Field(() => Boolean)  occupationalRiskManagement?: boolean;
	@Field(() => Boolean)  pensionFundManagement?: boolean;
	@Field(() => Boolean)  companion?: boolean;
	@Field(() => Boolean)  companionName?: boolean;
	@Field(() => Boolean)  kinshipCompanion?: boolean;
	@Field(() => Boolean)  companionPhone?: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
