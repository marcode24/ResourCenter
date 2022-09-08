import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { SharedModule } from '@shared/shared.module';

import { WebsiteComponent } from './pages/website/website.component';

import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    NgxStarRatingModule,
    FormsModule,
  ]
})
export class WebsiteModule { }
