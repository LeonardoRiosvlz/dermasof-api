import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { ClinicHistoryEntity, ClinicHistoryType } from '../entities/clinic-history.entity';
import { ClinicHistoryRepository } from '../repositories/clinic-history.repository';


@Injectable()
export class ClinicHistoryEntityService extends BaseEntityService<ClinicHistoryEntity> {
  constructor(private readonly _clinicHistoryRepo: ClinicHistoryRepository) {
    super(_clinicHistoryRepo, ClinicHistoryEntity.name);
  }

 

  async create(entity: ClinicHistoryEntity): Promise<Result<void>> {

    try {
      const count =await this.repo.count({ patient: { eq: entity.patient } });

      if (count>0 && entity.clinicHistoryType==='CONTROL') {
        await super.create(entity);
        return Result.Ok();
      }else if(count<1 && entity.clinicHistoryType==='CONTROL') {
        entity.clinicHistoryType = ClinicHistoryType.ENTRY
        await super.create(entity);
        return Result.Ok();
      }else{
        await super.create(entity);
        return Result.Ok();
      }


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }


}
