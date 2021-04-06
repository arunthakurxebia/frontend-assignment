import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faEuroSign, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { GetTransactionsService } from '../services/get-transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {
  faList = faList;
  faSearch = faSearch;
  faEuroSign = faEuroSign;
  transactions: any;
  marchentName:any = "";
  constructor(private dataService: GetTransactionsService) { }

  ngOnInit() {
    this.transactions = this.dataService.getTransacionsList()
      .sort((a: any, b: any) => +new Date(a.dates.valueDate) - +new Date(b.dates.valueDate));
  }

  inputChange(e:any){
    this.marchentName = e;
  }

}
