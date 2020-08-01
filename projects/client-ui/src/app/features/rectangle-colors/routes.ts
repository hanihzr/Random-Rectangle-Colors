import { Routes } from '@angular/router';

import { RectangleComponent } from './rectangle/rectangle.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RectangleComponent,
  },
];
