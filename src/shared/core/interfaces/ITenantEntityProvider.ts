export interface ITenantEntityProvider<ModelData, Provider> {
  createEntityProviders(entityData: Array<ModelData>): Array<Provider>
}