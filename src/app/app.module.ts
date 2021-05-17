import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePickerPipe } from './date-picker.pipe';
import { QuoteHighlightDirective } from './quote-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    AddQuoteComponent,
    QuoteDetailsComponent,
    DatePickerPipe,
    QuoteHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
