import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  getAllPeople() {
    return this.http.get('http://localhost:3000/people');
  }

  getPersonById(id: string) {
    return this.http.get(`http://localhost:3000/people/${id}`);
  }
}
