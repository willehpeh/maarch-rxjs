import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { concat, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingService } from '../../services/loading.service';
import { CompaniesService } from '../companies.service';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectForProfitCompanies, selectNonProfitCompanies } from '../companies.selectors';
import { AllCompaniesRequested } from '../companies.actions';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  forProfit$: Observable<Company[]>;
  nonProfit$: Observable<Company[]>;

  loading$: Observable<boolean>;

  constructor(private loading: LoadingService,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.loading$ = this.loading.getLoading();

    this.store.dispatch(new AllCompaniesRequested());

    this.forProfit$ = concat(this.store.select(selectForProfitCompanies));

    this.nonProfit$ = concat(this.store.select(selectNonProfitCompanies));
  }
}
