import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonViewComponent } from './person-view/person-view.component';

@NgModule({
  declarations: [PeopleListComponent, PersonViewComponent],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
