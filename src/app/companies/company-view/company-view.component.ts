import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from '../companies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Company } from '../models/Company';
import { concatMap, debounceTime, distinctUntilChanged, exhaustMap, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {

  companyForm: FormGroup;
  company: Company;
  submitClick$ = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder,
              private companies: CompaniesService,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.company = this.route.snapshot.data.company;
    localStorage.setItem('company-form', JSON.stringify(this.company));
    this.companyForm = this.formBuilder.group({
      companyName: [this.company.companyName, Validators.required],
      companyType: [this.company.companyType],
      buzz: [this.company.buzz, Validators.required]
    });

    this.companyForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(
        (prev, curr) => {
          return prev.companyName === curr.companyName
            && prev.companyType === curr.companyType
            && prev.buzz === curr.buzz;
        }
      ),
      map(form => ({ ...this.company, ...form }) ),
      concatMap(company => this.companies.updateCompany(company))
    ).subscribe();

    this.submitClick$.pipe(
      map(() => ({  ...this.company, ...this.companyForm.value })),
      exhaustMap(company => this.companies.updateCompany(company))
    ).subscribe(
      () => this.router.navigateByUrl('companies'),
      err => console.log(err)
    );
  }

  onSubmit() {
    this.submitClick$.next(true);
  }

  onGoBack() {
    this.companies.updateCompany(JSON.parse(localStorage.getItem('company-form'))).subscribe(
      () => this.router.navigateByUrl('companies'),
      err => console.log(err)
    );
  }
}
