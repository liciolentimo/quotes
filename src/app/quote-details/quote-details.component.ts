import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  

	quotes = []

  	addNewQuote(Quotes) {
  		this.quotes.push(Quotes);
    }
    
    deleteQuote(complete:boolean,index){
      if (complete){
          let toDelete=confirm(`Are you sure you want to delete this quote?`)
          
          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }

  dislike(i) {
    this.quotes[i].votes -=1;
  }

  like(z){
    this.quotes[z].votes +=1;
  }

  constructor() { }

  ngOnInit() {
  }

}

 