import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreSvcService } from './core-svc.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    //CoreSvcService
    HeaderComponent
  ],
  providers: [
    CoreSvcService
  ],
  declarations: [HeaderComponent]
})
export class CoreModule { }
