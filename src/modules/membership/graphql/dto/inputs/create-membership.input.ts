
import { Field, InputType, ID, Int, Float } from '@nestjs/graphql';
import { PeriodsType } from 'src/modules/membership/entities/membership.entity';

@InputType()
export class CreateMembershipInput {
  @Field(() => String) name:string;
  @Field(() => Float, {nullable: true} ) cost?:number;
  @Field(() => PeriodsType , {nullable: true} )  validity?: PeriodsType;
  @Field(() => Int, {nullable: true} ) daysAfterExpired?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) voiceTranscription?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) limitedNumberPatients?: boolean;
  @Field(() => Int, {nullable: true} ) limitPatients?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) useLogo?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) limitedNumberHeadquarters?: boolean;
  @Field(() => Int, {nullable: true} ) limitHeadquarters?:number;
  @Field(() => Int, {nullable: true} ) administrativeUserQuantity?:number;
  @Field(() => Int, {nullable: true} ) medicalUserQuantity?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingEmailMedicalPrescription?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingWhatsappMedicalPrescription?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) generateConsentDigitally?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) schedulingAppointmentsWeb?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentNotificationWhatsApp?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentNotificationMail?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentNotificationSms?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentReminderWhatsApp?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentReminderMail?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentReminderSms?: boolean;
  @Field(() => Boolean, ) numberSmsAllowed?:boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingMessagesSpecialDates?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingMailSpecialDates?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingWhatsAppSpecialDates?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) allowPromotionalEmailing?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) allowQuotesClients?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) inventoryAndBilling?: boolean;
  @Field(() => Int, ) hoursAllowedVideoConsultation?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) integrationWithPaymentGateway?: boolean;
  @Field(() => Float, {nullable: true}) additionalCostHeadquarters?:number;
  @Field(() => Float, {nullable: true}) additionalCostPerAdministrativeUser?:number;
  @Field(() => Float, {nullable: true}) additionalCostPerMedicalUser?:number;
  @Field(() => Float, {nullable: true}) additionalCostHoursVideoConsultation?:number;
  @Field(() => Float, {nullable: true}) additionalCostSmsPackage?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) isActive?: boolean;
}


