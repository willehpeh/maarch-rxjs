import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
