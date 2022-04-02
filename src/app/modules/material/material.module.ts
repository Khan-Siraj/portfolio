import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card'; 
const all = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
]


@NgModule({
  declarations: [],
  imports: [all],
  exports:[all]
})
export class MaterialModule { }
