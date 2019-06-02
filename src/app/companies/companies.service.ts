import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) {}

  getAllCompanies() {
    return this.http.get('http://localhost:3000/companies');
  }

  getCompanyById(id: string) {
    return this.http.get(`http://localhost:3000/companies/${id}`);
  }
}
