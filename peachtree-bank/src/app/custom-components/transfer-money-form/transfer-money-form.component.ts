import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEuroSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { GetTransactionsService } from 'src/app/services/get-transactions.service';
import { UtilService } from 'src/app/services/util.service';
/**
 * Componet for transfer money form
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
 */
ngOnInit() {
    this.moneyTransferForm = this.formBuilder.group({
      toAccount: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, this.amountValidator()])
    });
  }

  /**
   * Validate action on submit
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
   */
  isOpen($event: any) {
    this.showModal = false;
  }

  /**
   * Post data to update on confirm review payment
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

/**
 * Validate amount to over draft limit
 */
amountValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if ((parseFloat(this.myBalance) + 500) < parseFloat(control.value)) {
      return { amountValidator: true, requiredValue: this.myBalance };
    }
    return null;
  };
}
}
