import { ITenant } from 'src/shared/core/interfaces/ITenant';

import { AppCommand } from 'src/shared/modules/app-cqrs/base/AppCommand';

export class SetDefaultDataCommand extends AppCommand {
  constructor(public request: { tenant: ITenant }) {
    super();
  }
}
