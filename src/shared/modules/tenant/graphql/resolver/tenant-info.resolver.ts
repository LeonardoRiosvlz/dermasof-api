import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { IAppCQRSBus } from '../../../app-cqrs/interfaces/IAppCQRSBus';
import { BaseResolver } from '../../../graphql/resolvers/BaseResolver';
import { TenantInfoResponse } from '../dto/responses/tenant-info.response';
import { Result } from '../../../../core/class/result';

import { CloudFileResponse } from '../../../graphql/dto/responses/cloud-file.response';
import { FilesEntity } from '../../../files/entities/files.entity';
import { GetOneFilesQuery } from '../../../files/cqrs/queries/impl/get-one-files.query';

@Resolver(() => TenantInfoResponse)
export class TenantInfoResolver extends BaseResolver {
  constructor(
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }


  @ResolveField(() => CloudFileResponse, { nullable: true })
  async logoFile(@Parent() parent?: TenantInfoResponse): Promise<CloudFileResponse> {
    if (parent?.logoFile) {
      const fileOrErr = await this._cqrsBus.execQuery<Result<FilesEntity>>(new GetOneFilesQuery({
        where: {
          id: { eq: parent.logoFile.id },
        },
      }));
      if (fileOrErr.isFailure) {
        return null;
      }
      const file = fileOrErr.unwrap();

      return {
        id: file.id,
        key: file.key,
        url: file.url,
      };
    }
  }

}
