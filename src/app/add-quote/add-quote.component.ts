import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote }from '../quotes';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quoted = new Quote(0,"","","","",new Date(),0,0);
  @Output() add = new EventEmitter<Quote>();

  addQuote(){
this.add.emit(this.quoted);
this.quoted = new Quote(0,"","","","",new Date(),0,0);

  constructor() { }

  ngOnInit(): void {
  }

}
