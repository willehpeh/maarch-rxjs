import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { concat, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingService } from '../../services/loading.service';
import { CompaniesService } from '../companies.service';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

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

  constructor(private formBuilder: FormBuilder,
              private loading: LoadingService,
              private companies: CompaniesService) { }

  ngOnInit() {
    this.loading$ = this.loading.getLoading();
    this.searchForm = this.formBuilder.group({
      search: ''
    });
    const companies$ = this.companies.getAllCompanies();
    const searchedCompany$ = this.searchForm.valueChanges.pipe(
      debounceTime(300),
      map(form => form.search),
      distinctUntilChanged(),
      switchMap(search => this.companies.searchCompany(search))
    );
    this.forProfit$ = concat(companies$, searchedCompany$).pipe(
      map(companies => companies.filter(company => company.companyType === 'For Profit'))
    );
    this.nonProfit$ = concat(companies$, searchedCompany$).pipe(
      map(companies => companies.filter(company => company.companyType === 'Non-profit'))
    );
  }
}
