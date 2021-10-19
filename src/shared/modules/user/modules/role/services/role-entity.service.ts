import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { RoleEntity } from '../entities/role.entity';
import { RoleRepository } from '../repositories/role.repository';
import { Result } from '../../../../../core/class/result';
import { Identifier } from '../../../../../core/interfaces/IEntity';
import { RoleErrors } from '../errors/role.errors';


@Injectable()
export class RoleEntityService extends BaseEntityService<RoleEntity> {
  constructor(private readonly _roleRepo: RoleRepository) {
    super(_roleRepo, RoleEntity.name);
  }

  async create(entity: RoleEntity): Promise<Result<void>> {
    const exists = await this._roleRepo.exist({ name: { eq: entity.name } });
    if (exists) {
      return Result.Fail(new RoleErrors.RoleNameUsed(entity.name));
    }
    return super.create(entity);
  }


  async updateById(id: Identifier, update: Partial<RoleEntity>): Promise<Result<void>> {

    const role = await this._roleRepo.findById(id);
    if (!role) {
      return Result.Fail(new RoleErrors.RoleWithIdDoesNotExist(String(id)));
    }

    if (update.name) {
      const exists = await this._roleRepo.exist({ name: { eq: update.name } });
      if (exists) {
        Result.Fail(new RoleErrors.RoleNameUsed(update.name));
      }
    }

    return super.updateById(id, update);
  }





}
