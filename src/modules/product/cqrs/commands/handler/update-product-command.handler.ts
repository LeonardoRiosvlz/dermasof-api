import { CommandHandler } from '@nestjs/cqrs';
import { UpdateProductCommand } from '../impl/update-product.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ProductEntityService } from '../../../services/product-entity.service';
import { ProductEntity } from '../../../entities/product.entity';

@CommandHandler(UpdateProductCommand)
export class UpdateProductCommandHandler extends UpdateCommandHandler<ProductEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProductEntityService.name)
  }

}
