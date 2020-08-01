import { SharedLibModule } from 'shared-lib';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RectangleColorsRoutingModule } from './rectangle-colors-routing.module';
import { RectangleComponent } from './rectangle/rectangle.component';

@NgModule({
  declarations: [RectangleComponent],
  imports: [CommonModule, RectangleColorsRoutingModule, SharedLibModule],
})
export class RectangleColorsModule {}
