import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../models/Company';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from '../companies.service';
import { exhaustMap, mergeMap, reduce, tap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Person } from '../../people/models/Person';
import { PeopleService } from '../../people/people.service';


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
              private people: PeopleService) { }

  ngOnInit() {
    this.company = this.route.snapshot.data.company;
    localStorage.setItem('companyForm', JSON.stringify(this.company));
    this.companyForm = this.formBuilder.group({
      companyName: [this.company.companyName, Validators.required],
      companyType: [this.company.companyType, Validators.required],
      buzz: [this.company.buzz, Validators.required]
    });
    this.employees$ = from(this.company.employees).pipe(
      mergeMap(employeeId => this.people.getPersonById(employeeId)),
      reduce((acc, curr) => [...acc, curr], [])
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
    this.companies.updateCompany(JSON.parse(localStorage.getItem('companyForm'))).pipe(
      tap(() => this.router.navigateByUrl('companies'))
    ).subscribe();
  }
}
