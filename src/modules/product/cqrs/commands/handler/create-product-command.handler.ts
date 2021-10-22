import { CommandHandler } from '@nestjs/cqrs';

import { CreateProductCommand } from '../impl/create-product.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ProductEntity } from '../../../entities/product.entity';
import { ProductEntityService } from '../../../services/product-entity.service';

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler extends CreateCommandHandler<ProductEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ProductEntityService.name);
  }

}
