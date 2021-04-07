import { TestBed } from '@angular/core/testing';
import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UtilService] });
    service = TestBed.get(UtilService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
