import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models/Company';


@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {

  company: Company;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.company = this.route.snapshot.data.company;
  }

  onSubmit() {
  }

  onGoBack() {
  }
}
