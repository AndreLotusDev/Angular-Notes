import { Component, OnInit } from '@angular/core';

export interface Company {
  client: string;
  hash: string;
  registration: string;
  lei: string;
  vat: string;
}

const ELEMENT_DATA: Company[] = [
  {client: 'Company A', hash: '123456789', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company B', hash: '123452229', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company C', hash: '12342229', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company D', hash: '12342121', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company E', hash: '123456721212', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company F', hash: '12345673223', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company G', hash: '123456339', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company H', hash: '12345589', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company I', hash: '1234563339', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
  {client: 'Company J', hash: '12345554789', registration: '01/01/2020', lei: '123456789', vat: '123456789'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  selectedCompany: Company | null = null;
  tabListCompanies: boolean = true;
  selectedIndex = 0;

  ngOnInit(): void {
    
  }

  displayedColumns: string[] = ['client', 'hash', 'registration', 'lei', 'vat', 'actions'];
  dataSource = ELEMENT_DATA;
  
}
