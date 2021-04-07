import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetTransactionsService } from 'src/app/services/get-transactions.service';
import { UtilService } from 'src/app/services/util.service';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { TransferMoneyFormComponent } from './transfer-money-form.component';

describe('TransferMoneyFormComponent', () => {
  let component: TransferMoneyFormComponent;
  let fixture: ComponentFixture<TransferMoneyFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const getTransactionsServiceStub = () => ({
      updateTransactionList: object => ({})
    });
    const utilServiceStub = () => ({ amountValidator: myBalance => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TransferMoneyFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        {
          provide: GetTransactionsService,
          useFactory: getTransactionsServiceStub
        },
        { provide: UtilService, useFactory: utilServiceStub }
      ]
    });
    fixture = TestBed.createComponent(TransferMoneyFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`faWallet has default value`, () => {
    expect(component.faWallet).toEqual(faWallet);
  });

  it(`faEuroSign has default value`, () => {
    expect(component.faEuroSign).toEqual(faEuroSign);
  });

  it(`myBalance has default value`, () => {
    expect(component.myBalance).toEqual(`5824.76`);
  });

  it(`submitted has default value`, () => {
    expect(component.submitted).toEqual(false);
  });

  it(`insuffBal has default value`, () => {
    expect(component.insuffBal).toEqual(false);
  });
});
