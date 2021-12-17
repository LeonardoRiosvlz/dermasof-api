import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesPhotographicReportEntity } from '../entities/files-photographic-report.entity';
import { FilesPhotographicReportRepository } from '../repositories/files-photographic-report.repository';


@Injectable()
export class FilesPhotographicReportEntityService extends BaseEntityService<FilesPhotographicReportEntity> {
  constructor(private readonly _filesPhotographicReportRepo: FilesPhotographicReportRepository) {
    super(_filesPhotographicReportRepo, FilesPhotographicReportEntity.name);
  }




}
