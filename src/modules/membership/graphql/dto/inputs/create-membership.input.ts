
import { Field, InputType, ID, Int, Float } from '@nestjs/graphql';
import { Periods } from 'src/modules/membership/entities/membership.entity';

@InputType()
export class CreateMembershipInput {
  @Field(() => Float, ) cost?:number;
  @Field(() => Periods, )  validity?: Periods;
  @Field(() => Int, ) daysAfterExpired?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) voiceTranscription?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) limitedNumberPatients?: boolean;
  @Field(() => Int, ) limitPatients?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) useLogo?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) limitedNumberHeadquarters?: boolean;
  @Field(() => Int, ) limitHeadquarters?:number;
  @Field(() => Int, ) administrativeUserQuantity?:number;
  @Field(() => Int, ) medicalUserQuantity?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingEmailMedicalPrescription?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingWhatsappMedicalPrescription?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) generateConsentDigitally?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) schedulingAppointmentsWeb?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentWotificationWhatsApp?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentWotificationMail?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentWotificationSms?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentReminderWhatsApp?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentReminderMail?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) appointmentReminderSms?: boolean;
  @Field(() => Int, ) NumberSmsAllowed?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingMessagesSpecialDates?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingMailSpecialDates?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) sendingWhatsAppSpecialDates?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) allowPromotionalEmailing?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) AllowQuotesClients?: boolean;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) inventoryAndBilling?: boolean;
  @Field(() => Int, ) hoursAllowedVideoConsultation?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) integrationWithPaymentGateway?: boolean;
  @Field(() => Float, ) additionalCostHeadquarters?:number;
  @Field(() => Float, ) additionalCostPerAdministrativeUser?:number;
  @Field(() => Float, ) additionalCostPerMedicalUser?:number;
  @Field(() => Float, ) additionalCostHoursVideoConsultation?:number;
  @Field(() => Float, ) additionalCostSmsPackage?:number;
  @Field(() => Boolean, { nullable: true, defaultValue: true }) isActive?: boolean;
}


