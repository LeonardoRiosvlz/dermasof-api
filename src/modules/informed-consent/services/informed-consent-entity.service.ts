import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { InformedConsentEntity } from '../entities/informed-consent.entity';
import { InformedConsentRepository } from '../repositories/informed-consent.repository';


@Injectable()
export class InformedConsentEntityService extends BaseEntityService<InformedConsentEntity> {
  constructor(private readonly _informedConsentRepo: InformedConsentRepository) {
    super(_informedConsentRepo, InformedConsentEntity.name);
  }




}
