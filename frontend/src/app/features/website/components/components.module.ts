import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentComponent } from './comment/comment.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CommentComponent
  ]
})
export class ComponentsModule { }
