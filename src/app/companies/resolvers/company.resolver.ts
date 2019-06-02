import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Company } from '../models/Company';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class CompanyResolver implements Resolve<Company> {

  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    return EMPTY;
  }
}
