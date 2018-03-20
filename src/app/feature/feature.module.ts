import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DataComponent } from './data/data.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: [DataComponent]
})
export class FeatureModule { }
