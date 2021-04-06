import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faEuroSign, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { GetTransactionsService } from 'src/app/services/get-transactions.service';

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
  marchentName: any = '';
  private subscription = new Subscription();
  constructor(private dataService: GetTransactionsService) { }

  ngOnInit() {
    this.dataService.transactions.subscribe(res => {
      this.transactions = res.sort((a:any, b:any) => +new Date(a.dates.valueDate) - +new Date(b.dates.valueDate));
    })
  }

  inputChange(e: any) {
    this.marchentName = e;
  }

}
