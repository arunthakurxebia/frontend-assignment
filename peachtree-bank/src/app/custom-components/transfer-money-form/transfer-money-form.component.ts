import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEuroSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { GetTransactionsService } from 'src/app/services/get-transactions.service';
import { UtilService } from 'src/app/services/util.service';
/**
 * Componet for transfer money form
 *
 * @export
 * @class TransferMoneyFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-transfer-money-form',
  templateUrl: './transfer-money-form.component.html',
  styleUrls: ['./transfer-money-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransferMoneyFormComponent implements OnInit {
  faWallet = faWallet;
  faEuroSign = faEuroSign;
  showModal: boolean;
  amount: any;
  myBalance: any = '5824.76';
  submitted = false;
  moneyTransferForm: FormGroup;
  insuffBal: any = false;

  get moneyTransferFormControl() {
    return this.moneyTransferForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private util: UtilService,
    private dataService: GetTransactionsService,
    private cdRef: ChangeDetectorRef) { }
/**
 *  Operation to perform on initialization
 *
 * @memberof TransferMoneyFormComponent
 */
ngOnInit() {
    this.moneyTransferForm = this.formBuilder.group({
      toAccount: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, this.util.amountValidator(this.myBalance)])
    });
  }

  /**
   * Validate action on submit
   *
   * @return {*} 
   * @memberof TransferMoneyFormComponent
   */
  submitForm() {
    this.amount = parseFloat(this.moneyTransferFormControl.amount.value).toFixed(2);
    this.submitted = true;
    if (this.moneyTransferForm.invalid) {
      return;
    } else {
      this.showModal = true;
    }
  }

  /**
   * Get open/close status of modal
   *
   * @param {*} $event
   * @memberof TransferMoneyFormComponent
   */
  isOpen($event: any) {
    this.showModal = false;
  }

  /**
   * Post data to update on confirm review payment
   *
   * @param {*} $event
   * @memberof TransferMoneyFormComponent
   */
  confirm($event: any) {
    this.dataService.updateTransactionList({
      amount: this.moneyTransferFormControl.amount.value,
      name: this.moneyTransferFormControl.toAccount.value
    });
    this.myBalance = (parseFloat(this.myBalance) - parseFloat(this.moneyTransferFormControl.amount.value)).toFixed(2);
    this.showModal = false;
    this.submitted = false;
    this.moneyTransferForm.reset();
    this.cdRef.markForCheck();
  }
}
