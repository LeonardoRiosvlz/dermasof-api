import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ClinicHistoryEntity } from 'src/modules/clinic-history/entities/clinic-history.entity';
import { DiagnosisTypeEntity } from 'src/modules/diagnosis-type/entities/diagnosis-type.entity';
import { DiagnosisEntity } from 'src/modules/diagnosis/entities/diagnosis.entity';

@Schema({ ...SchemaConstants, collection: 'clinic-history-diagnosis' })
export class ClinicHistoryDiagnosisEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClinicHistoryEntity}) clinicHistory: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => DiagnosisTypeEntity}) diagnosisType: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => DiagnosisEntity}) diagnosis: string;
}

export const ClinicHistoryDiagnosisSchema = SchemaFactory.createForClass(ClinicHistoryDiagnosisEntity);

export const ClinicHistoryDiagnosisFeature = {
  name: ClinicHistoryDiagnosisEntity.name,
  schema: ClinicHistoryDiagnosisSchema,
};
