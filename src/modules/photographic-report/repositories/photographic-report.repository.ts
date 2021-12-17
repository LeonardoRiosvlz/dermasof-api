import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { PhotographicReportEntity } from '../entities/photographic-report.entity';
import { FilesPhotographicReportRepository } from '../modules/files-photographic-report/repositories/files-photographic-report.repository';

@Injectable()
export class PhotographicReportRepository extends BaseRepository<PhotographicReportEntity, FilterableFieldsType<PhotographicReportEntity>>implements Partial<IEntityHooks<PhotographicReportEntity>> {
  constructor(
    private _filesPhotographicReportRepository:FilesPhotographicReportRepository,
    @Inject(PhotographicReportEntity.name) private readonly _photographicReportModel: Model<PhotographicReportEntity>,
  ) {
    super(_photographicReportModel, PhotographicReportRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(photographicReport: PhotographicReportEntity): Promise<void> {
    await this._filesPhotographicReportRepository.deleteMany({ photographicReport: { eq: photographicReport.id } });
  }
}
