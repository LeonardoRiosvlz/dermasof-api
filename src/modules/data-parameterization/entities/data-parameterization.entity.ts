import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'data-parameterization' })
export class DataParameterizationEntity extends PersistentEntity {
  @Prop() paymentDeadlines: number;
	@Prop() deadlineForPaymentReminder: number;
	@Prop() deadlineForAppointmentReminder: number;
}

export const DataParameterizationSchema = SchemaFactory.createForClass(DataParameterizationEntity);

export const DataParameterizationFeature = {
  name: DataParameterizationEntity.name,
  schema: DataParameterizationSchema,
};
