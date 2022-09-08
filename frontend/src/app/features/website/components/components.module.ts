import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    NgxStarRatingModule,
    FormsModule
  ],
  exports: [
    CommentComponent
  ]
})
export class ComponentsModule { }
