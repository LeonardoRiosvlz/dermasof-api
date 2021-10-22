import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'patient-data-settings' })
export class PatientDataSettingsEntity extends PersistentEntity {
	 @Prop() firstName?: boolean;
	 @Prop() lastName?: boolean;
	 @Prop() firstSurname?: boolean;
	 @Prop() lastSurname?: boolean;
	 @Prop() dateOfBirth?: boolean;
	 @Prop() gender?: boolean;
	 @Prop() maritalStatus?: boolean;
	 @Prop() bloodType?: boolean;
	 @Prop() vitalStatus?: boolean;
	 @Prop() contactInformation?: boolean;
	 @Prop() landlinePhoneNumber?: boolean;
	 @Prop() phoneNumber?: boolean;
	 @Prop() patientHeadquarters?: boolean;
	 @Prop() mainAddress?: boolean;
	 @Prop() secondaryHeadquarters?: boolean;
	 @Prop() countryDepartmentCity?: boolean;
	 @Prop() email?: boolean;
	 @Prop() socialSecurity?: boolean;
	 @Prop() affiliateType?: boolean;
	 @Prop() affiliateTypeSsg?: boolean;
	 @Prop() educationLevel?: boolean;
	 @Prop() ethnicGroup?: boolean;
	 @Prop() populationGroup?: boolean;
	 @Prop() occupation?: boolean;
	 @Prop() eps?: boolean;
	 @Prop() affiliateDate?: boolean;
	 @Prop() prepaid?: boolean;
	 @Prop() benefitPlan?: boolean;
	 @Prop() healthCareProgram?: boolean;
	 @Prop() generalNotesAttention?: boolean;
	 @Prop() contractNumber?: boolean;
	 @Prop() occupationalRiskManagement?: boolean;
	 @Prop() pensionFundManagement?: boolean;
	 @Prop() companion?: boolean;
	 @Prop() companionName?: boolean;
	 @Prop() kinshipCompanion?: boolean;
	 @Prop() companionPhone?: boolean;
}

export const PatientDataSettingsSchema = SchemaFactory.createForClass(PatientDataSettingsEntity);

export const PatientDataSettingsFeature = {
  name: PatientDataSettingsEntity.name,
  schema: PatientDataSettingsSchema,
};
