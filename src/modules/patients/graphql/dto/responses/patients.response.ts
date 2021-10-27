import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { Gender } from 'src/shared/modules/user/entities/schemas/profile.schema';
import { DocumentType, Stratum,MaritalStatus,RegimeType } from 'src/modules/patients/entities/patients.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(DocumentType, { name: 'DocumentType' });
registerEnumType(Stratum, { name: 'Stratum' });
registerEnumType(MaritalStatus, { name: 'MaritalStatus' });
registerEnumType(RegimeType, { name: 'RegimeType' });


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
  @Field(()=>Stratum,{nullable: true}) stratum?: Stratum;
  @Field(()=>MaritalStatus,{nullable: true}) maritalStatus?: MaritalStatus;
  @Field(()=>RegimeType,{nullable: true}) regimeType?: RegimeType;
  @Field({nullable: true}) documentNumber?: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) headquarters?: SolvedEntityResponse;
  @Field(() => SolvedEntityResponse, { nullable: true }) habeasData?: SolvedEntityResponse;
  @Field(() => String, {nullable: true} ) phoneNumber: string;
  @Field(() => String, {nullable: true} ) country?: string;
  @Field(() => String, {nullable: true} ) city?: string;
  @Field(() => String, {nullable: true} ) department?: string;
  @Field(() => String, {nullable: true} ) guardian?: string;
  @Field(() => String, {nullable: true} ) occupation?: string;
  @Field(() => String, {nullable: true} ) guardianPhone?: string;
  @Field(() => String, {nullable: true} ) relationship?: string;
  @Field(() => String, {nullable: true} ) email: string;
  @Field(() => CloudFileResponse, { nullable: true }) photoFile?: CloudFileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) signature?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
