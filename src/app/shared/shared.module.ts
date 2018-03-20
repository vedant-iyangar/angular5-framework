import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
// import {SampleService} from 'some-path';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [SharedService]
    };
  }
}
