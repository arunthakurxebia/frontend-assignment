import { Injectable } from '@angular/core';

import transactions from '../../dev/transactions.json';

@Injectable({
  providedIn: 'root'
})
export class GetTransactionsService {
  constructor() { }

  getTransacionsList() {
    return transactions.data;
  }

  updateTransactionList(item: any) {
    transactions.data.push({
      id: Math.random(),
      merchant: {
        name: item.name
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
    });
  }
}
