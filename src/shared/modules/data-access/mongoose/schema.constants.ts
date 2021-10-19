import { SchemaOptions } from '@nestjs/mongoose';

export const SchemaConstants: SchemaOptions = {
  timestamps: { createdAt: true, updatedAt: true },
  versionKey: false,
};
