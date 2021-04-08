import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetTransactionsService {
  private mockApiHost = 'assets/transactions.json';
  private apiHost = 'dev/transactions'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  private subscription = new Subscription();

  private dataSource = new BehaviorSubject<any[]>([]);

  transactions = this.dataSource.asObservable();

  /**
   * Creates an instance of GetTransactionsService.
   * @param {HttpClient} http
   * @memberof GetTransactionsService
   */
  constructor(private http: HttpClient) {
    this.subscription.add(
      this.getTransacionsList().subscribe(res => {
          this.dataSource.next(res);
      },
      err => {
        console.log("mocking data...");
        this.getMockTransactionsList().subscribe(res => {
          this.dataSource.next(res.data);
        })
      })
    )
  }

  /**
   * Get transaction list from rest API
   *
   * @return {*}  {Observable<any>}
   * @memberof GetTransactionsService
   */
  public getTransacionsList():Observable<any> {
    return this.http.get<any[]>(`${this.apiHost}`);
  }

  /**
   * Get transaction list from local mock json
   *
   * @return {*}  {Observable<any>}
   * @memberof GetTransactionsService
   */
  public getMockTransactionsList():Observable<any>{
    return this.http.get<any[]>(`${this.mockApiHost}`);
  }

  /**
   * Update transactionlist stored in local onject
   *
   * @param {*} item
   * @memberof GetTransactionsService
   */
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
