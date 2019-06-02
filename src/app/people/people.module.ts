import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [PeopleListComponent, PersonViewComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
