import { Injectable } from '@angular/core';

import transactions from '../../dev/transactions.json';

@Injectable({
  providedIn: 'root'
})
export class GetTransactionsService {
  list = transactions.data;
  constructor() { }

  getTransacionsList() {
    return this.list;
  }

  updateTransactionList(item: any) {
    const data = {
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
    this.list.push(data);
  }
}
