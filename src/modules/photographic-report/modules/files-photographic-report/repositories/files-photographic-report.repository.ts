import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesPhotographicReportEntity } from '../entities/files-photographic-report.entity';

@Injectable()
export class FilesPhotographicReportRepository extends BaseRepository<FilesPhotographicReportEntity, FilterableFieldsType<FilesPhotographicReportEntity>> {
  constructor(
    @Inject(FilesPhotographicReportEntity.name) private readonly _filesPhotographicReportModel: Model<FilesPhotographicReportEntity>,
  ) {
    super(_filesPhotographicReportModel, FilesPhotographicReportRepository.name);
  }
}
