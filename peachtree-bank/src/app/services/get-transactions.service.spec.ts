import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { GetTransactionsService } from './get-transactions.service';

describe('GetTransactionsService', () => {
  let service: GetTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetTransactionsService]
    });
    spyOn(GetTransactionsService.prototype, 'getTransacionsList');
    service = TestBed.get(GetTransactionsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('constructor', () => {
    it('makes expected calls', () => {
      expect(
        GetTransactionsService.prototype.getTransacionsList
      ).toHaveBeenCalled();
    });
  });
});
