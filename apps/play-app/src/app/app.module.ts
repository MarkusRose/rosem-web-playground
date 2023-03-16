import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { treasureReducer } from './+state/treasure.reducer';
import { AppComponent } from './app.component';
import { EntryCreateReadComponent } from './entry-create-read/entry-create-read.component';
import { BoxHighlightComponent } from './box-highlight/box-highlight.component';
import { TreasureComponent } from './treasure/treasure.component';
import { TreasureEffects } from './+state/treasure.effects';
// import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path: 'database',
    component: EntryCreateReadComponent,
  },
  {
    path: 'boxes',
    component: BoxHighlightComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/treasure',
  },
  {
    path: 'treasure',
    component: TreasureComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EntryCreateReadComponent,
    BoxHighlightComponent,
    TreasureComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ treasure: treasureReducer }),
    // EffectsModule.forRoot([TreasureEffects]),
    ReactiveFormsModule,
    MatCheckboxModule,
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
