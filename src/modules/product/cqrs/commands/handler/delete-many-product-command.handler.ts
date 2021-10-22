import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyProductCommand } from '../impl/delete-many-product.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ProductEntity } from '../../../entities/product.entity';
import { ProductEntityService } from '../../../services/product-entity.service';

@CommandHandler(DeleteManyProductCommand)
export class DeleteManyProductCommandHandler extends DeleteManyCommandHandler<ProductEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ProductEntityService.name)
  }

}
