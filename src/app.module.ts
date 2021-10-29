import { Module } from '@nestjs/common';
import { AppConfigService } from './shared/modules/config/service/app-config-service';
import { DataAccessModule } from './shared/modules/data-access/data-access.module';
import { AppGraphqlModule } from './shared/modules/graphql/graphql.module';
import { TenantModule } from './shared/modules/tenant/tenant.module';
import { UserModule } from './shared/modules/user/user.module';
import { AuthModule } from './shared/modules/auth/auth.module';
import { FilesModule } from './shared/modules/files/files.module';
import { NotificationModule } from './shared/modules/notification/notification.module';
import { FixturesModule } from './shared/modules/fixtures/fixtures.module';
import { HeadquartersModule } from './modules/headquarters/headquarters.module'
import { SettingModule } from './modules/setting/setting.module';
import { MembershipModule } from './modules/membership/membership.module';
import { DataParameterizationModule } from './modules/data-parameterization/data-parameterization.module';
import { PatientDataSettingsModule } from './modules/patient-data-settings/patient-data-settings.module';
import { MedicalSpecialtiesModule } from './modules/medical-specialties/medical-specialties.module';
import { DiagnosisTypeModule } from './modules/diagnosis-type/diagnosis-type.module';
import { DiagnosisModule } from './modules/diagnosis/diagnosis.module';
import { ProceduresModule } from './modules/procedures/procedures.module';
import { IndicationsPatientModule } from './modules/indications-patient/indications-patient.module';
import { HabeasDataModule } from './modules/habeas-data/habeas-data.module';
import { InformedConsentModule } from './modules/informed-consent/informed-consent.module';
import { PatientSafetyCheckModule } from './modules/patient-safety-check/patient-safety-check.module';
import { LaboratoryExamsModule } from './modules/laboratory-exams/laboratory-exams.module';
import { MedicinesModule } from './modules/medicines/medicines.module';
import { PathologiesModule } from './modules/pathologies/pathologies.module';
import { ServiceModule } from './modules/service/service.module';
import { ProductModule } from './modules/product/product.module';
import { PatientsModule } from './modules/patients/patients.module';
import { ConsultationTypeModule } from './modules/consultation-type/consultation-type.module';
import { VitalSignsModule } from './modules/vital-signs/vital-signs.module';
import { ClinicHistoryModule } from './modules/clinic-history/clinic-history.module';

@Module({
  imports: [
    AppConfigService,
    AppGraphqlModule,
    DataAccessModule,
    TenantModule,
    UserModule,
    AuthModule,
    FilesModule,
    NotificationModule,
    HeadquartersModule,
    SettingModule,
    MembershipModule,
    DataParameterizationModule,
    PatientDataSettingsModule,
    MedicalSpecialtiesModule,
    DiagnosisTypeModule,
    DiagnosisModule,
    ProceduresModule,
    IndicationsPatientModule,
    HabeasDataModule,
    InformedConsentModule,
    PatientSafetyCheckModule,
    LaboratoryExamsModule,
    MedicinesModule,
    PathologiesModule,
    ServiceModule,
    ProductModule,
    FixturesModule,
    PatientsModule,
    ConsultationTypeModule,
    VitalSignsModule,
    ClinicHistoryModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule { }
