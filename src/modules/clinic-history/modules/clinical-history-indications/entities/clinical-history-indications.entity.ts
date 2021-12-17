import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ClinicHistoryEntity } from 'src/modules/clinic-history/entities/clinic-history.entity';
import { IndicationsPatientEntity } from 'src/modules/indications-patient/entities/indications-patient.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'clinical-history-indications' })
export class ClinicalHistoryIndicationsEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClinicHistoryEntity}) clinicHistory: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => IndicationsPatientEntity}) indications: string;
  @Prop() description?: string;
}

export const ClinicalHistoryIndicationsSchema = SchemaFactory.createForClass(ClinicalHistoryIndicationsEntity);

export const ClinicalHistoryIndicationsFeature = {
  name: ClinicalHistoryIndicationsEntity.name,
  schema: ClinicalHistoryIndicationsSchema,
};
