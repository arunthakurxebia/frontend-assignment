import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTransactionsService {
  private apiHost = 'assets/transactions.json';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  private subscription = new Subscription();

  private dataSource = new BehaviorSubject<any[]>([]);

  transactions = this.dataSource.asObservable();

  constructor(private http: HttpClient) {
    this.subscription.add(
      this.getTransacionsList().subscribe(res => {
          this.dataSource.next(res.data);
      },
      err => {
        console.log(err);
      })
    )
  }

  public getTransacionsList():Observable<any> {
    return this.http.get<any[]>(`${this.apiHost}`);
  }

  updateTransactionList(item: any) {
    const dataPayload = {
      categoryCode: '',
      merchant: {
        name: item.name,
        accountNumber: '0000'
      },
      dates: {
        valueDate: new Date()
      },
      transaction: {
        type: 'Online Transaction',
        creditDebitIndicator: 'DBIT',
        amountCurrency: {
          currencyCode: 'EUR',
          amount: item.amount
        }
      }
    };
    this.dataSource.next(this.dataSource.getValue().concat([dataPayload]));
  }
}
