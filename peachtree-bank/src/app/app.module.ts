import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { TransactionItemComponent } from './transaction-item/transaction-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmountDirective } from './directives/amount.directive';
import { ReviewModalComponent } from './custom-components/review-modal/review-modal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PtDatePipe } from './pipes/pt-date.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FilterComponent } from './filter/filter.component';
import { TransferMoneyFormComponent } from './custom-components/transfer-money-form/transfer-money-form.component';
import { TransactionListComponent } from './custom-components/transaction-list/transaction-list.component';
import { LoaderComponent } from './custom-components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { PtCurrencyPipe } from './pipes/pt-currency.pipe';
import { LoaderInterceptorService } from './services/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LogoComponent,
    SubmitButtonComponent,
    FilterComponent,
    TransactionItemComponent,
    TransferMoneyFormComponent,
    AmountDirective,
    ReviewModalComponent,
    TransactionListComponent,
    PtDatePipe,
    FilterByPipe,
    LoaderComponent,
    PtCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
