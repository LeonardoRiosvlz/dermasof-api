import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';
import { DocumentType } from 'src/modules/patients/entities/patients.entity';

registerEnumType(DocumentType, { name: 'DocumentType' });



@ObjectType()
export class PatientsResponse{
  @Field(() => ID) id: string;
  @Field(() => String, {nullable: true} ) lastName: string;
  @Field(() => String, {nullable: true} ) firstName: string;
  @Field(() => String, {nullable: true} ) firstSurName: string;
  @Field(() => String, {nullable: true} ) lastSurName: string;
  @Field(() => String, {nullable: true} ) dateOfBirth: string;
  @Field(() => Gender, {nullable: true} ) gender: Gender;
  @Field(()=>DocumentType,{nullable: true}) documentType: DocumentType;
  @Field({nullable: true}) documentNumber: string;
  @Field(() => String, {nullable: true} ) phoneNumber: string;
  @Field(() => String, {nullable: true} ) email: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
