import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntryCreateReadComponent } from './entry-create-read/entry-create-read.component';
import { BoxHighlightComponent } from './box-highlight/box-highlight.component';

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
    redirectTo: '/database',
  },
];

@NgModule({
  declarations: [AppComponent, EntryCreateReadComponent, BoxHighlightComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
