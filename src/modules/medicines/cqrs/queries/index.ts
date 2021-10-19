import { GetAllMedicinesQueryHandler } from './handler/get-all-medicines-query.handler';
import { GetPaginatedMedicinesQueryHandler } from './handler/get-paginated-medicines-query.handler';
import { GetOneMedicinesQueryHandler } from './handler/get-one-medicines-query.handler';
import { Provider } from '@nestjs/common';

export const MedicinesQueryHandlers:Array<Provider> = [
  GetAllMedicinesQueryHandler,
  GetPaginatedMedicinesQueryHandler,
  GetOneMedicinesQueryHandler,
];
