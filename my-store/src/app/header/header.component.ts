import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cart: CartService
  ) { }

  orderCount: number = 0

  updateOrderCount():void{
    this.orderCount = this.cart.fetchOrderList().length
  }


  ngOnInit(): void {

  }

}
