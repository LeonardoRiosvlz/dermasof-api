import { Field, InputType, ID } from '@nestjs/graphql';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';
import { DocumentType } from 'src/modules/patients/entities/patients.entity';

@InputType()
export class CreatePatientsInput {
  @Field(() => String, {nullable: true} ) lastName: string;
  @Field(() => String, {nullable: true} ) firstName: string;
  @Field(() => String, {nullable: true} ) firstSurName: string;
  @Field(() => String, {nullable: true} ) lastSurName: string;
  @Field(() => String, {nullable: true} ) dateOfBirth: string;
  @Field(() => Gender, {nullable: true} ) gender: Gender;
  @Field(() => DocumentType, )  documentType: DocumentType;
  @Field(() => String, )  documentNumber: string;
  @Field(() => String, {nullable: true} ) phoneNumber: string;
  @Field(() => String, {nullable: true} ) email: string;
}
