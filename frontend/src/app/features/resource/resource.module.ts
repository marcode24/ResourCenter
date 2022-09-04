import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResourceComponent } from './pages/resource/resource.component';

import { ComponentsModule } from './components/components.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ResourceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    SharedModule
  ]
})
export class ResourceModule { }
