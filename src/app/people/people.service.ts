import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './models/Person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  getAllPeople() {
    return this.http.get<Person[]>('http://localhost:3000/employees');
  }

  getPersonById(id: string) {
    return this.http.get<Person>(`http://localhost:3000/employees/${id}`);
  }
}
