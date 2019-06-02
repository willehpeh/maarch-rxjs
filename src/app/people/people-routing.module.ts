import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonViewComponent } from './person-view/person-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PeopleListComponent },
  { path: ':id', component: PersonViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {}
