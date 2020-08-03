import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

const Material = [
  MatButtonModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material
  ],
  exports:[Material]
})
export class MaterialModule { }
