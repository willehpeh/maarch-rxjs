import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { map, mergeMap, shareReplay } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';
import { PeopleService } from '../../people/people.service';
import { Person } from '../../people/models/Person';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  forProfit$: Observable<Company[]>;
  nonProfit$: Observable<Company[]>;

  loading$: Observable<boolean>;

  constructor(private companies: CompaniesService,
              private loading: LoadingService,
              private people: PeopleService) { }

  ngOnInit() {
    this.loading$ = this.loading.getLoading();
    const companies$ = this.companies.getAllCompanies().pipe(
      shareReplay()
    );

    this.forProfit$ = companies$.pipe(
      map(companies => companies.filter(company => company.companyType === 'For Profit'))
    );
    this.nonProfit$ = companies$.pipe(
      map(companies => companies.filter(company => company.companyType === 'Non-profit'))
    );
  }
}
