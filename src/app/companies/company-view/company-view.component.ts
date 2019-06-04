import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/Company';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from '../companies.service';
import { exhaustMap, filter, mergeMap, reduce, take, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Person } from '../../people/models/Person';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectPersonById } from '../people.selectors';
import { EmployeeRequested } from '../people.actions';


@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {

  company: Company;
  companyForm: FormGroup;
  employees$: Observable<Person[]>;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private companies: CompaniesService,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.company = this.route.snapshot.data.company;
    localStorage.setItem('companyForm', JSON.stringify(this.company));
    this.companyForm = this.formBuilder.group({
      companyName: [this.company.companyName, Validators.required],
      companyType: [this.company.companyType, Validators.required],
      buzz: [this.company.buzz, Validators.required]
    });

    this.employees$ = from(this.company.employees).pipe(
      mergeMap(id => this.store.select(selectPersonById(id)).pipe(
        tap(employee => {
          if (!employee) {
            this.store.dispatch(new EmployeeRequested({ employeeId: id }));
          }
        })
      )),
      filter(person => !!person),
      take(this.company.employees.length),
      reduce((acc, curr) => [...acc, curr], []),
    );
  }

  onSubmit() {
    of(true).pipe(
      exhaustMap(() => this.companies.updateCompany({
        ...this.company,
        ...this.companyForm.value
      })),
      tap(() => this.router.navigateByUrl('companies'))
    ).subscribe();
  }

  onGoBack() {
    if (this.companyForm.untouched) {
      this.router.navigateByUrl('companies');
    }
    this.companies.updateCompany(JSON.parse(localStorage.getItem('companyForm'))).pipe(
      tap(() => this.router.navigateByUrl('companies'))
    ).subscribe();
  }
}
