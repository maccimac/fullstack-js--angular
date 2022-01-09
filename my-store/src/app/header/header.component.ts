import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // subscription: any;

  constructor(
    private cart: CartService,
  ) { }

  orderCount: number = 0
  subscribe: any

  updateOrderCount():void{
    this.orderCount = this.cart.fetchOrderList().length
  }

  ngOnInit(): void {
    const _this = this
    this.subscribe = this.cart.getOrderTotalChangeEmitter()
      .subscribe((orderTotal: number) =>{
        _this.orderCount = orderTotal
      })
  }

}
