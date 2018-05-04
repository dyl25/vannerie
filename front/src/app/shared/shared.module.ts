import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrLimitPipe } from './pipes/str-limit.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StrLimitPipe
  ],
  exports: [
    StrLimitPipe
  ]
})
export class SharedModule { }
