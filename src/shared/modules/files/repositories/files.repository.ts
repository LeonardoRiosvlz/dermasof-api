import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesEntity } from '../entities/files.entity';
import { AWSCloudService } from '../services/aws-cloud.service';

@Injectable()
export class FilesRepository extends BaseRepository<FilesEntity, FilterableFieldsType<FilesEntity>>
  implements Partial<IEntityHooks<FilesEntity>> {
  constructor(
    @Inject(FilesEntity.name) private readonly _filesModel: Model<FilesEntity>,
    private readonly _cloudService: AWSCloudService
  ) {
    super(_filesModel, FilesRepository.name, {
      afterDelete: (e) => this.afterDelete(e)
    });
  }


  async afterDelete(e: FilesEntity): Promise<void> {
    await this._cloudService.drop(e.key)
  }

}
