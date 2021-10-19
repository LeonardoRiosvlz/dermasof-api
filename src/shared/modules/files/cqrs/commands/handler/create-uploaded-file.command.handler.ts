import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { CreateUploadedFileCommand } from '../impl/create-uploaded-file.command';
import {Result} from 'src/shared/core/class/result'
import { AppFilesService } from '../../../services/app-files.service';


@CommandHandler(CreateUploadedFileCommand)
export class CreateUploadedFileCommandHandler implements ICommandHandler<CreateUploadedFileCommand>{
  constructor(readonly _moduleRef: ModuleRef) { }
  async execute({ request, contextId }: CreateUploadedFileCommand): Promise<Result<void>> {
    const service = await this._moduleRef.resolve(AppFilesService, contextId as ContextId)
    return await service.createUploadedFile(request);
  }
}