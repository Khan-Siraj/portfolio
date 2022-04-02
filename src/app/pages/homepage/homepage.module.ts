import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { AllModulesModule } from 'src/app/modules/all-modules/all-modules.module';
import { ServicesComponent } from './services/services.component';
import { CustomersTalkComponent } from './customers-talk/customers-talk.component';


@NgModule({
  declarations: [HomepageComponent, ServicesComponent, CustomersTalkComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    AllModulesModule
  ]
})
export class HomepageModule { }
