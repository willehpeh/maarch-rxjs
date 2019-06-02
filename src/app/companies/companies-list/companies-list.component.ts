import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {

  forProfit$: Observable<Company[]>;
  nonProfit$: Observable<Company[]>;

  constructor(private companies: CompaniesService) { }

  ngOnInit() {
    this.forProfit$ = this.companies.getAllCompanies().pipe(
      map(companies => companies.filter(company => company.companyType === 'For Profit'))
    );
    this.nonProfit$ = this.companies.getAllCompanies().pipe(
      map(companies => companies.filter(company => company.companyType === 'Non-profit'))
    );
  }

}
