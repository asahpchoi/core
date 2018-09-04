import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreSvcService } from './core-svc.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    //CoreSvcService
    HeaderComponent,
    FooterComponent,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [
    CoreSvcService
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
