import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { GetUploadSignedUrlQuery } from '../impl/get-upload-signed-url.query';
import { ICloudId } from '../../../interfaces/ICloudFileService';
import { AWSCloudService } from '../../../services/aws-cloud.service';
import {Result} from 'src/shared/core/class/result'

@QueryHandler(GetUploadSignedUrlQuery)
export class GetUploadSignedUrlQueryHandler implements IQueryHandler<GetUploadSignedUrlQuery> {
  constructor(readonly _moduleRef: ModuleRef) { }

  async execute({ request, contextId }: GetUploadSignedUrlQuery): Promise<Result<ICloudId>> {
    const service = await this._moduleRef.resolve(AWSCloudService, contextId as ContextId)
    return await service.getWriteSignedUrl(request.filename, request.contentType)
  }
}
