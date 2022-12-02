import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from './material.barrel';

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
