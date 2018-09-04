import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreSvcService } from './core-svc.service';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    CoreSvcService
  ],
  declarations: []
})
export class CoreModule { }
