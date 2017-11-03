import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreationsService} from './creations.service';
import {CreationsComponent} from './creations.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      CreationsComponent
  ],
  providers: [
      CreationsService
  ]
})
export class CreationsModule { }
