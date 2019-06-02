import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompaniesService } from '../companies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Company } from '../models/Company';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {

  companyForm: FormGroup;
  company: Company;

  constructor(private formBuilder: FormBuilder,
              private companies: CompaniesService,
              private router: Router,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.company = this.route.snapshot.data.company;
    this.companyForm = this.formBuilder.group({
      companyName: [this.company.companyName, Validators.required],
      companyType: [this.company.companyType],
      buzz: [this.company.buzz, Validators.required]
    });
  }

  onSubmit() {
    this.companies.updateCompany({
      ...this.company,
      companyName: this.companyForm.get('companyName').value,
      companyType: this.companyForm.get('companyType').value,
      buzz: this.companyForm.get('buzz').value
    }).subscribe(
      () => this.router.navigateByUrl('companies'),
      err => console.log(err)
    );
  }

  onGoBack() {
    this.location.back();
  }

}
