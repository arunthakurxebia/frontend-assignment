import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Transaction {
  id:String,
      merchant:{
         name:String,
         accountNumber:String
      },
      dates:{
         valueDate:String
      },
      categoryCode:String,
      transaction:{
         type:String,
         creditDebitIndicator:String,
         amountCurrency:{
            currencyCode:String,
            amount:String
         }
      }
}

@Injectable({
  providedIn: 'root'
})
export class GetTransactionsService {

  private apiHost = '/dev/transactions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }
      
  getTransacionsList() {
    return this.http.get<Transaction[]>(`${this.apiHost}`, this.httpOptions);
  }
}
