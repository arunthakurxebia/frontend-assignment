import { Component, OnInit } from '@angular/core';
import { faList, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  faList = faList;
  faSearch= faSearch;
  constructor() { }

  ngOnInit() {
  }

}
