import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { CreateComponent } from './operators/create/create.component';
import { OfFromRangeComponent } from './operators/creation-operators/of-from-range/of-from-range.component';
import { TimerIntervalFromEventComponent } from './operators/creation-operators/timer-interval-from-event/timer-interval-from-event.component';
import { MapMaptoReduceScanComponent } from './operators/transformation-operators/map-mapto-reduce-scan/map-mapto-reduce-scan.component';
import { ObservableObserverSubscriptionComponent } from './fundamentals/observable-observer-subscription/observable-observer-subscription.component';
import { GroupbyPartitionToarrayComponent } from './operators/transformation-operators/groupby-partition-toarray/groupby-partition-toarray.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { AsyncSubjectComponent } from './subjects/async-subject/async-subject.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { CardComponent } from './subjects/subject/components/card/card.component';
import { MenuComponent } from './subjects/subject/components/menu/menu.component';

const OPERATORS = [
  CombineLatestComponent,
  CreateComponent,
];

const SUBJECTS = [
  SubjectComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...OPERATORS,
    ...SUBJECTS,
    OfFromRangeComponent,
    TimerIntervalFromEventComponent,
    MapMaptoReduceScanComponent,
    ObservableObserverSubscriptionComponent,
    GroupbyPartitionToarrayComponent,
    BehaviorSubjectComponent,
    AsyncSubjectComponent,
    ReplaySubjectComponent,
    CardComponent,
    MenuComponent,
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
