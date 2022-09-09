import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchInputComponent } from './search-input/search-input.component';
import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';

@NgModule({
  declarations: [
    ToggleThemeComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleThemeComponent,
    SearchInputComponent
  ]
})
export class SharedModule { }
