import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './models/Company';
import { LoadingService } from '../services/loading.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient,
              private loading: LoadingService) {}

  getAllCompanies() {
    this.loading.setLoading(true);
    return this.http.get<Company[]>('http://localhost:3000/companies').pipe(
      tap(() => this.loading.setLoading(false))
    );
  }

  getCompanyById(id: string) {
    this.loading.setLoading(true);
    return this.http.get<Company>(`http://localhost:3000/companies/${id}`).pipe(
      tap(() => this.loading.setLoading(false))
    );;
  }

  updateCompany(company: Company) {
    return this.http.put(`http://localhost:3000/companies/${company.id}`, company, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  searchCompany(search: string) {
    return this.http.get<Company[]>(`http://localhost:3000/companies?companyName_like=${search}`);
  }
}
