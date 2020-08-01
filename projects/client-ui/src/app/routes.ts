import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/rectangle-colors/rectangle-colors.module').then(
        (m) => m.RectangleColorsModule
      ),
  },
];
