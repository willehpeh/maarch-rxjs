import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectCompanyById } from '../companies.selectors';
import { filter, first, tap } from 'rxjs/operators';
import { CompanyRequested } from '../companies.actions';

@Injectable()
export class CompanyResolver implements Resolve<Company> {

  constructor(private companies: CompaniesService,
              private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    const companyId = route.paramMap.get('id');
    return this.store.select(selectCompanyById(companyId)).pipe(
      tap(company => {
        if (!company) {
          this.store.dispatch(new CompanyRequested({companyId}));
        }
      }),
      filter(company => !!company),
      first()
    );
  }
}
