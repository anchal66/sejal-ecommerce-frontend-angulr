import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatButtonModule
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
