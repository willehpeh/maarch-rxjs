import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { concat, Observable } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { debounceTime, distinctUntilChanged, map, shareReplay, switchMap } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  forProfit$: Observable<Company[]>;
  nonProfit$: Observable<Company[]>;

  loading$: Observable<boolean>;

  searchForm: FormGroup;

  constructor(private companies: CompaniesService,
              private loading: LoadingService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });

    this.loading$ = this.loading.getLoading();

    const companies$ = this.companies.getAllCompanies().pipe(
      shareReplay()
    );

    const searchCompanies$ = this.searchForm.valueChanges.pipe(
      shareReplay(),
      debounceTime(300),
      map(form => form.search),
      distinctUntilChanged(),
      switchMap(searchString => this.companies.searchCompany(searchString))
    );

    this.forProfit$ = concat(companies$, searchCompanies$).pipe(
      map(companies => companies.filter(company => company.companyType === 'For Profit'))
    );
    this.nonProfit$ = concat(companies$, searchCompanies$).pipe(
      map(companies => companies.filter(company => company.companyType === 'Non-profit'))
    );
  }
}
