import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMoneyFormComponent } from './transfer-money-form.component';

describe('TransferMoneyFormComponent', () => {
  let component: TransferMoneyFormComponent;
  let fixture: ComponentFixture<TransferMoneyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferMoneyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferMoneyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
