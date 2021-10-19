import { Inject, Injectable } from '@nestjs/common';
import { BaseEntityService } from '../../../core/class/base.service';
import { TenantEntity } from '../entities/tenant.entity';
import { TenantRepository } from '../repositories/tenant.repository';
import { Result } from '../../../core/class/result';
import { TenantErrors } from '../errors/tenant.errors';
import { IAppCQRSBus } from '../../app-cqrs/interfaces/IAppCQRSBus';
import { AppError } from '../../../core/errors/AppError';
import { OnCreatedTenantEvent } from '../cqrs/events/impl/on-created-tenant-event';
import { OnDeletedTenantEvent } from '../cqrs/events/impl/on-deleted-tenant-event';
import { UserErrors } from '../../user/errors/user.errors';
import { merge } from 'lodash';


@Injectable()
export class TenantService extends BaseEntityService<TenantEntity> {
  constructor(private readonly _tenantRepo: TenantRepository,
              @Inject(IAppCQRSBus.$) private _cqrsBus: IAppCQRSBus) {
    super(_tenantRepo, TenantEntity.name);
  }


  async create(entity: TenantEntity): Promise<Result<void>> {
    try {
      const exists = await this._tenantRepo.exist({ code: { eq: entity.name } });
      if (exists) {
        return Result.Fail(new TenantErrors.TenantCodeUsed(entity.name));
      }

      const createOrErr = await super.create(entity);

      if (createOrErr.isSuccess) {
        await this._cqrsBus.publishEvent(new OnCreatedTenantEvent(entity));
      }

      return createOrErr;
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


  async updateById(id: string, update: Partial<TenantEntity>): Promise<Result<void>> {
    const tenant = await this._tenantRepo.findOne({ id: { eq: id } });
    if (!tenant) {
      return Result.Fail(new TenantErrors.TenantDoesNotExist(String(id)));
    }


    if (update?.info) {
      update.info = merge(tenant.info, update.info);
    }
    return super.updateById(id, update);
  }


  async deleteById(id: string): Promise<Result<void>> {
    try {
      const tenant = await this._tenantRepo.findById(id);

      if (!tenant) {
        return Result.Fail(new TenantErrors.TenantDoesNotExist('unknown'));
      }

      const deleteOrErr = await super.deleteById(tenant.id);

      if (deleteOrErr.isSuccess) {
        await this._cqrsBus.publishEvent(new OnDeletedTenantEvent(tenant));
      }
      return deleteOrErr;
    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }

}
