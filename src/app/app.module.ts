import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteshownComponent } from './quoteshown/quoteshown.component';
import { TimePassedPipe } from './time-passed.pipe';
import { HighestVotesDirective } from './highest-votes.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    QuoteshownComponent,
    TimePassedPipe,
    HighestVotesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
