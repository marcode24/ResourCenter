import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteComponent } from './pages/website/website.component';

import { ComponentsModule } from './components/components.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ]
})
export class WebsiteModule { }
