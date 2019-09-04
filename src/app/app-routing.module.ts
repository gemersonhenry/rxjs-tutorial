import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { SubjectComponent } from './subjects/subject/subject.component';


const routes: Routes = [
  {
    path: 'combine-latest',
    component: CombineLatestComponent,
    pathMatch: 'full',
  },
  {
    path: 'subject',
    component: SubjectComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
