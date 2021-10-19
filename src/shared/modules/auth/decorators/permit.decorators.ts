import { SetMetadata } from '@nestjs/common';
import { PermitsType } from '../../../resources/permits.type';
export const Permit = (permits: PermitsType) => SetMetadata('permits', permits);
