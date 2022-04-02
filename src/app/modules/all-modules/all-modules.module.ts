import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
const modules = [
  MaterialModule,
  FlexLayoutModule
]



@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]
})
export class AllModulesModule { }
