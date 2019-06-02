import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './models/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) {}

  getAllCompanies() {
    return this.http.get<Company[]>('http://localhost:3000/companies');
  }

  getCompanyById(id: string) {
    return this.http.get<Company>(`http://localhost:3000/companies/${id}`);
  }

  updateCompany(company: Company) {
    return this.http.put(`http://localhost:3000/companies/${company.id}`, company, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
