import { Field, ID,  ObjectType ,registerEnumType} from '@nestjs/graphql';
import { PeriodsType } from 'src/modules/membership/entities/membership.entity';

registerEnumType(PeriodsType, { name: 'PeriodsType' });

@ObjectType()
export class MembershipResponse{
  @Field(() => ID) id: string;
  @Field() name:string;
  @Field({nullable: true}) cost?:number;
  @Field(()=> PeriodsType) validity?: PeriodsType;
  @Field({nullable: true}) daysAfterExpired?:number;
  @Field({nullable: true}) voiceTranscription?: boolean;
  @Field({nullable: true}) limitedNumberPatients?: boolean;
  @Field({nullable: true}) limitPatients?:number;
  @Field({nullable: true}) useLogo?: boolean;
  @Field({nullable: true}) limitedNumberHeadquarters?: boolean;
  @Field({nullable: true}) limitHeadquarters?:number;
  @Field({nullable: true}) administrativeUserQuantity?:number;
  @Field({nullable: true}) medicalUserQuantity?:number;
  @Field({nullable: true}) sendingEmailMedicalPrescription?: boolean;
  @Field({nullable: true}) sendingWhatsappMedicalPrescription?: boolean;
  @Field({nullable: true}) generateConsentDigitally?: boolean;
  @Field({nullable: true}) schedulingAppointmentsWeb?: boolean;
  @Field({nullable: true}) appointmentNotificationWhatsApp?: boolean;
  @Field({nullable: true}) appointmentNotificationMail?: boolean;
  @Field({nullable: true}) appointmentNotificationSms?: boolean;
  @Field({nullable: true}) appointmentReminderWhatsApp?: boolean;
  @Field({nullable: true}) appointmentReminderMail?: boolean;
  @Field({nullable: true}) appointmentReminderSms?: boolean;
  @Field({nullable: true}) numberSmsAllowed?:boolean;
  @Field({nullable: true}) sendingMessagesSpecialDates?: boolean;
  @Field({nullable: true}) sendingMailSpecialDates?: boolean;
  @Field({nullable: true}) sendingWhatsAppSpecialDates?: boolean;
  @Field({nullable: true}) allowPromotionalEmailing?: boolean;
  @Field({nullable: true}) allowQuotesClients?: boolean;
  @Field({nullable: true}) inventoryAndBilling?: boolean;
  @Field({nullable: true}) hoursAllowedVideoConsultation?:number;
  @Field({nullable: true}) integrationWithPaymentGateway?: boolean;
  @Field({nullable: true}) additionalCostHeadquarters?:number;
  @Field({nullable: true}) additionalCostPerAdministrativeUser?:number;
  @Field({nullable: true}) additionalCostPerMedicalUser?:number;
  @Field({nullable: true}) additionalCostHoursVideoConsultation?:number;
  @Field({nullable: true}) additionalCostSmsPackage?:number;
  @Field({nullable: true}) isActive?: boolean;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}


