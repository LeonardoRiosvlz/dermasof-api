import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesEntity } from '../entities/files.entity';
import { FilesRepository } from '../repositories/files.repository';


@Injectable()
export class FilesEntityService extends BaseEntityService<FilesEntity> {
  constructor(private readonly _filesRepo: FilesRepository) {
    super(_filesRepo, FilesEntity.name);
  }




}
