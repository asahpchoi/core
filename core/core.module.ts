import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreSvcService } from './core-svc.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    //CoreSvcService
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    CoreSvcService
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
