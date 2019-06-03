import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';
import { CompaniesService } from '../companies.service';

@Injectable()
export class CompanyResolver implements Resolve<Company> {

  constructor(private companies: CompaniesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    return this.companies.getCompanyById(route.paramMap.get('id'));
  }
}
