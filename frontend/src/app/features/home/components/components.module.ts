import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardNavigationComponent } from './card-navigation/card-navigation.component';
import { CardTipsComponent } from './card-tips/card-tips.component';

@NgModule({
  declarations: [
    CardNavigationComponent,
    CardTipsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardNavigationComponent,
    CardTipsComponent
  ]
})
export class ComponentsModule { }
