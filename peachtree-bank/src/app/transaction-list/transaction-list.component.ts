import { Component, OnInit } from '@angular/core';
import { faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { GetTransactionsService } from '../services/get-transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  faList = faList;
  faSearch= faSearch;
  private subscription = new Subscription();
  constructor(private dataService : GetTransactionsService) { }

  ngOnInit() {
    this.subscription.add(
      this.dataService.getTransacionsList().subscribe(res => {
        console.log(res);
      },
      err => {
        console.log(err);
      })
    )
      this.dataService.getTransacionsList();
      console.log(this.dataService.getTransacionsList());
  }

}
