import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';

@NgModule({
  declarations: [
    ToggleThemeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleThemeComponent
  ]
})
export class SharedModule { }
