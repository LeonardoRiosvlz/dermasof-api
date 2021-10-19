export interface MultiTenancyConfig {
  enabled?: boolean;
  tenantResolver: TenantResolver;
}

export interface TenantInfo {
  config?: MultiTenancyConfig;
  tenantId?: string;
  accessToken?: {
    key: string;
  };
}

export type TenantResolveType = 'domain' | 'cookie' | 'header' | 'query' | 'params'

export type TenantResolver =
  {
    resolverType: TenantResolveType;
    headerKeys?: {
      apiKey?: string;
    };
    requiresToken?: boolean;
  }

