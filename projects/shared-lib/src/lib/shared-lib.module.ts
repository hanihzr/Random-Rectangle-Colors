import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    // StoreModule.forRoot({ ...RootReducers }),
    // EffectsModule.forRoot(RootEffects),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    // }),
  ],
  exports: [],
})
export class SharedLibModule {}
