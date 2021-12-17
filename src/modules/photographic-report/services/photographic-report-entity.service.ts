import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { PhotographicReportEntity } from '../entities/photographic-report.entity';
import { PhotographicReportRepository } from '../repositories/photographic-report.repository';


@Injectable()
export class PhotographicReportEntityService extends BaseEntityService<PhotographicReportEntity> {
  constructor(private readonly _photographicReportRepo: PhotographicReportRepository) {
    super(_photographicReportRepo, PhotographicReportEntity.name);
  }




}
