import { TestBed } from '@angular/core/testing';
import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', () => {
  let pipe: FilterByPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FilterByPipe] });
    pipe = TestBed.get(FilterByPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms X to Y', () => {
    const value: any[] = ['X'];
    const args: any = 'X';
    expect(pipe.transform(value, args)).toBeTruthy();
  });
});
