import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';
import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';

@NgModule({
  declarations: [
    RatingComponent,
    ToggleThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RatingComponent,
    ToggleThemeComponent
  ]
})
export class SharedModule { }
