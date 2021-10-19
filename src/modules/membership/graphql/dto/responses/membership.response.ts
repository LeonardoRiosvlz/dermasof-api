import { Field, ID,  ObjectType ,registerEnumType} from '@nestjs/graphql';
import { Periods } from 'src/modules/membership/entities/membership.entity';

registerEnumType(Periods, { name: 'TaxType' });

@ObjectType()
export class MembershipResponse{
  @Field(() => ID) id: string;
  @Field({nullable: true}) cost?:number;
  @Field(()=>Periods) validity?: Periods;
  @Field({nullable: true}) daysAfterExpired?:number;
  @Field() voiceTranscription?: boolean;
  @Field() limitedNumberPatients?: boolean;
  @Field({nullable: true}) limitPatients?:number;
  @Field() useLogo?: boolean;
  @Field() limitedNumberHeadquarters?: boolean;
  @Field({nullable: true}) limitHeadquarters?:number;
  @Field({nullable: true}) administrativeUserQuantity?:number;
  @Field({nullable: true}) medicalUserQuantity?:number;
  @Field() sendingEmailMedicalPrescription?: boolean;
  @Field() sendingWhatsappMedicalPrescription?: boolean;
  @Field() generateConsentDigitally?: boolean;
  @Field() schedulingAppointmentsWeb?: boolean;
  @Field() appointmentWotificationWhatsApp?: boolean;
  @Field() appointmentWotificationMail?: boolean;
  @Field() appointmentWotificationSms?: boolean;
  @Field() appointmentReminderWhatsApp?: boolean;
  @Field() appointmentReminderMail?: boolean;
  @Field() appointmentReminderSms?: boolean;
  @Field({nullable: true}) NumberSmsAllowed?:number;
  @Field() sendingMessagesSpecialDates?: boolean;
  @Field() sendingMailSpecialDates?: boolean;
  @Field() sendingWhatsAppSpecialDates?: boolean;
  @Field() allowPromotionalEmailing?: boolean;
  @Field() AllowQuotesClients?: boolean;
  @Field() inventoryAndBilling?: boolean;
  @Field({nullable: true}) hoursAllowedVideoConsultation?:number;
  @Field() integrationWithPaymentGateway?: boolean;
  @Field({nullable: true}) additionalCostHeadquarters?:number;
  @Field({nullable: true}) additionalCostPerAdministrativeUser?:number;
  @Field({nullable: true}) additionalCostPerMedicalUser?:number;
  @Field({nullable: true}) additionalCostHoursVideoConsultation?:number;
  @Field({nullable: true}) additionalCostSmsPackage?:number;
  @Field() isActive?: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}


