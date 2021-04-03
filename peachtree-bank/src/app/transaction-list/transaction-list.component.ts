import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faEuroSign, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { GetTransactionsService } from '../services/get-transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {
  faList = faList;
  faSearch= faSearch;
  faEuroSign = faEuroSign;
  private subscription = new Subscription();
  transactions: any;
  constructor(private dataService : GetTransactionsService) { }

  ngOnInit() {
    this.subscription.add(
      this.dataService.getTransacionsList().subscribe(res => {
        console.log(res);
        this.transactions = res.sort((a:any, b:any) => +new Date(a.dates.valueDate) - +new Date(b.dates.valueDate))
      },
      err => {
        console.log(err);
      })
    )
      this.dataService.getTransacionsList();
      console.log(this.dataService.getTransacionsList());
  }

}
