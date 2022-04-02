import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutpageComponent } from './aboutpage.component';

const routes: Routes = [{ path: '', component: AboutpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutpageRoutingModule { }
