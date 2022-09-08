import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { CommentComponent } from './comment/comment.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxStarRatingModule,
    FormsModule
  ],
  exports: [
    CommentComponent
  ]
})
export class ComponentsModule { }
