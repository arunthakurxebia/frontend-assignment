import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import transactions from '../../dev/transactions.json';

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
    //return this.http.get<Transaction[]>(`${this.apiHost}`, this.httpOptions);
    return transactions.data;
  }

  updateTransactionList(item : any) {
    transactions.data.push({
      id: Math.random(),
      merchant:{
        name:item.name
      },
      dates:{
        valueDate:new Date()
      },
      transaction:{
        type:"Online Transaction",
        creditDebitIndicator:'DBIT',
        amountCurrency:{
          currencyCode:"EUR",
          amount:item.amount
        }
      }
    });
  }
}
