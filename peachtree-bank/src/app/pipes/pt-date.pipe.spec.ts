import { TestBed } from '@angular/core/testing';
import { PtDatePipe } from './pt-date.pipe';

describe('PtDatePipe', () => {
  let pipe: PtDatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PtDatePipe] });
    pipe = TestBed.get(PtDatePipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms X to Y', () => {
    const value: any = 'X';
    const args: string[] = [];
    expect(pipe.transform(value, args)).toEqual('Y');
  });
});
