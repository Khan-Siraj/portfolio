import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutpageRoutingModule } from './aboutpage-routing.module';
import { AboutpageComponent } from './aboutpage.component';
import { AllModulesModule } from 'src/app/modules/all-modules/all-modules.module';


@NgModule({
  declarations: [AboutpageComponent],
  imports: [
    CommonModule,
    AboutpageRoutingModule,
    AllModulesModule
  ]
})
export class AboutpageModule { }
