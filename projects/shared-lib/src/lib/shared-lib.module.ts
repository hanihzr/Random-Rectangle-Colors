import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects/src/effects_module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src/instrument';
import { StoreModule } from '@ngrx/store/src/store_module';

import { RootEffects } from './ngrx/effects/root';
import { RootReducers } from './ngrx/store/reducers/root';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({ ...RootReducers }),
    EffectsModule.forRoot(RootEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  exports: [],
})
export class SharedLibModule {}
