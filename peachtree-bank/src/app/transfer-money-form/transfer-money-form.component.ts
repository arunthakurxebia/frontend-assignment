import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEuroSign, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-transfer-money-form',
  templateUrl: './transfer-money-form.component.html',
  styleUrls: ['./transfer-money-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransferMoneyFormComponent implements OnInit {
  faWallet = faWallet;
  faEuroSign = faEuroSign;
  showModal:boolean;
  amount:any;
  myBalance:any = '5824.76'

  moneyTransferForm = new FormGroup({
    toAccount: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.pattern('^(?!^0\.00$)(([1-9][\d]{0,6})|([0]))\.[\d]{2}$')])
  })
  get moneyTransferFormControl() {
    return this.moneyTransferForm.controls;
  }
  constructor() { }

  ngOnInit() {
  }

  submitForm(e: any){
    console.log(e);
    this.amount = parseFloat(this.moneyTransferFormControl.amount.value).toFixed(2);
    this.showModal = true;
    // if(this.moneyTransferForm.valid){
    //   this.showModal = true;
    // }else{
    //   if(parseInt(this.myBalance) < parseFloat(this.amount)){

    //   }
    // }
  }

  isOpen($event :any){
    this.showModal = false;
  }
}
