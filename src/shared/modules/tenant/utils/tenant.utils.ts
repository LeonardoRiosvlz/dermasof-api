import { Provider } from '@nestjs/common';
import { Connection } from 'mongoose';
import { ModelDefinition } from '@nestjs/mongoose';
import { TENANT_CONNECTION } from 'src/shared/modules/tenant/providers/tenant.providers';

export class TenantUtils {
  public static buildTenantEntityProvider = (
    documents: Array<ModelDefinition>,
  ): Array<Provider> => {
    return documents.map(
      (doc): Provider => {
       return  {
          provide: doc.name,
          useFactory: (connection: Connection) => {
            return connection.model(doc.name, doc.schema);
          },
          inject: [TENANT_CONNECTION],
        };
      },
    );
  };
}
