import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { SubjectComponent } from './subjects/subject/subject.component';

const OPERATORS = [
  CombineLatestComponent,
];

const SUBJECTS = [
  SubjectComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...OPERATORS,
    ...SUBJECTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
