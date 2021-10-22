import { CommandHandler } from '@nestjs/cqrs';
import { DeleteProductCommand } from '../impl/delete-product.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ProductEntity } from '../../../entities/product.entity';
import { ProductEntityService } from '../../../services/product-entity.service';

@CommandHandler(DeleteProductCommand)
export class DeleteProductCommandHandler extends DeleteCommandHandler<ProductEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProductEntityService.name)
  }
}
