import { Component, OnInit,Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quoteshown',
  templateUrl: './quoteshown.component.html',
  styleUrls: ['./quoteshown.component.css']
})
export class QuoteshownComponent implements OnInit {

  @Input() quote:Quotes;

  constructor() { }

  ngOnInit() {
  }

}




