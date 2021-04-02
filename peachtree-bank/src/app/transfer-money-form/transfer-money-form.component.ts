import { Component, OnInit } from '@angular/core';
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

  moneyTransferForm = new FormGroup({
    toAccount: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit() {
  }

  submitForm(e: any){
    console.log(e)
  }

}
