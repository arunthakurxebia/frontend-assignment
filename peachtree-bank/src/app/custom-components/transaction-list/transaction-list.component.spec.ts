import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GetTransactionsService } from 'src/app/services/get-transactions.service';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { TransactionListComponent } from './transaction-list.component';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(() => {
    const getTransactionsServiceStub = () => ({
      transactions: { subscribe: f => f({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TransactionListComponent],
      providers: [
        {
          provide: GetTransactionsService,
          useFactory: getTransactionsServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
  });
});
