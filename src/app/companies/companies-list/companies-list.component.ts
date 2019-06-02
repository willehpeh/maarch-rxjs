import { Component, OnInit } from '@angular/core';
import { Company } from '../models/Company';
import { Observable } from 'rxjs';
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }
}
