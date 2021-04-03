import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { TransferMoneyFormComponent } from './transfer-money-form/transfer-money-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmountDirective } from './directives/amount.directive';
import { ReviewModalComponent } from './review-modal/review-modal.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PtDatePipe } from './pipe/pt-date.pipe';
import { FilterByPipe } from './pipe/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LogoComponent,
    SubmitButtonComponent,
    TransactionItemComponent,
    TransferMoneyFormComponent,
    AmountDirective,
    ReviewModalComponent,
    TransactionListComponent,
    PtDatePipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
