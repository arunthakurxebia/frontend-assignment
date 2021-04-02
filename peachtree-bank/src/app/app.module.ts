import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LogoComponent,
    SubmitButtonComponent,
    TransactionItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
