import { Model } from "mongoose";

import { IEntity } from "src/shared/core/interfaces/IEntity";
import { ITenant } from "src/shared/core/interfaces/ITenant";
import { UniqueEntityID } from "../../data-access/mongoose/UniqueEntityID";
import { ModelDef } from "../interfaces/IFixture";
import { IFixtureService } from "../interfaces/IFixtureService";


export class ComputedDataService {

    constructor(
        private service: IFixtureService,
        private tenant?: ITenant
    ) {

    }


    async process(): Promise<void> {

        if (!this.tenant) {




        }


    }



}