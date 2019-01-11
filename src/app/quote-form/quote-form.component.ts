import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotesdetails=new Quotes('','','',new Date());

  personName:string;
  authorName:string;
  quoteName:string;
  datePublished:Date;
  newQuote:any;

  @Output() addQuote = new EventEmitter();

	submitQuote() {
		this.newQuote =new Date();
        this.quotesdetails = new Quotes(this.personName,this.quoteName,this.authorName,this.datePublished);
        this.addQuote.emit(this.newQuote);
    }


  constructor() { }

  ngOnInit() {
  }

}
