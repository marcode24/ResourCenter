import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource.component';

import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ResourceComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ResourceModule { }
