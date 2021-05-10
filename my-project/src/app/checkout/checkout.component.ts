import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() cartcount=0; //allow value from parent
  

  constructor() { }

  ngOnInit(): void {
  }

}
