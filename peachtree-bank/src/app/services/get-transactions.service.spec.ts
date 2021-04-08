import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { GetTransactionsService } from './get-transactions.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GetTransactionsService', () => {
  let service: GetTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [GetTransactionsService]
    });
    spyOn(GetTransactionsService.prototype, 'getTransacionsList');
    service = TestBed.get(GetTransactionsService);
  });
});
