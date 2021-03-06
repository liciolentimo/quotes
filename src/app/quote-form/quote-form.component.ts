import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotesdetails=new Quotes('','','',new Date(),0);

  personName:string;
  authorName:string;
  quoteName:string;
  datePublished:Date;
  newQuote:any;

  @Output() addQuote = new EventEmitter<Quotes>();

	submitQuote() {
		this.datePublished =new Date();
        this.newQuote = new Quotes(this.personName,this.quoteName,this.authorName,this.datePublished,0);
        this.addQuote.emit(this.newQuote);
        // quoteForm.reset({
        //   'personName': '',
        //   'authorName': '',
        //   'quoteName': ''
        // });
        // console.log(this.quotesdetails);
    }


  constructor() { }

  ngOnInit() {
  }

}
