import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

export enum PeriodsType{
  MONTHLY='MONTHLY',
  BIMONTHLY='BIMONTHLY',
  QUARTERLY='QUARTERLY',
  BIANNUAL='BIANNUAL',
  ANNUAL='ANNUAL'
}

@Schema({ ...SchemaConstants, collection: 'membership' })
export class MembershipEntity extends PersistentEntity {
  @Prop() name: string; 
  @Prop() cost?: number; 
  @Prop({type:String}) validity?: PeriodsType;
  @Prop() daysAfterExpired?: number; 
  @Prop() voiceTranscription?: boolean;
  @Prop() limitedNumberPatients?: boolean;
  @Prop() limitPatients?: number; 
  @Prop() useLogo?: boolean;
  @Prop() limitedNumberHeadquarters?: boolean;
  @Prop() limitHeadquarters?: number; 
  @Prop() administrativeUserQuantity?: number; 
  @Prop() medicalUserQuantity?: number; 
  @Prop() sendingEmailMedicalPrescription?: boolean;
  @Prop() sendingWhatsappMedicalPrescription?: boolean;
  @Prop() generateConsentDigitally?: boolean;
  @Prop() schedulingAppointmentsWeb?: boolean;
  @Prop() appointmentNotificationWhatsApp?: boolean;
  @Prop() appointmentNotificationMail?: boolean;
  @Prop() appointmentNotificationSms?: boolean;
  @Prop() appointmentReminderWhatsApp?: boolean;
  @Prop() appointmentReminderMail?: boolean;
  @Prop() appointmentReminderSms?: boolean;
  @Prop() numberSmsAllowed?: boolean;
  @Prop() sendingMessagesSpecialDates?: boolean;
  @Prop() sendingMailSpecialDates?: boolean;
  @Prop() sendingWhatsAppSpecialDates?: boolean;
  @Prop() allowPromotionalEmailing?: boolean;
  @Prop() allowQuotesClients?: boolean;
  @Prop() inventoryAndBilling?: boolean;
  @Prop() hoursAllowedVideoConsultation?: number; 
  @Prop() integrationWithPaymentGateway?: boolean;
  @Prop() additionalCostHeadquarters?: number; 
  @Prop() additionalCostPerAdministrativeUser?: number; 
  @Prop() additionalCostPerMedicalUser?: number; 
  @Prop() additionalCostHoursVideoConsultation?: number; 
  @Prop() additionalCostSmsPackage?: number; 
  @Prop() isActive?: boolean;
}

export const MembershipSchema = SchemaFactory.createForClass(MembershipEntity);

export const MembershipFeature = {
  name: MembershipEntity.name,
  schema: MembershipSchema,
};


