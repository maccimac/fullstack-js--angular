import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDataService } from '../../services/product-data.service'
import { CartService} from '../../services/cart.service'
import { OrderItem, ProductItem, ProductOrder } from '../../models/types'

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})

export class CartSummaryComponent implements OnInit {
  orderProductList: ProductOrder[] =  []
  totalPrice: number = 0
  subscribe: any


  constructor(
    private productData: ProductDataService,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    const _this = this
    this.orderProductList = this.cart.orderProductList
    this.totalPrice = this.cart.totalPrice

    this.subscribe = this.cart.getProductOrderChangeEmitter()
      .subscribe((orderProductList: ProductOrder[]) =>{
        console.log({orderProductList: this.orderProductList})
        _this.orderProductList = orderProductList
      })
  }

  onChange(id: number | null): void {
    /*if(!id) return
    const productIndex = this.orderProductList.findIndex((product)=>{
      return product.id == id
    })
    const product = this.orderProductList[productIndex]
    const newTotal = product.price * product.qty*/
    // this.orderProductList[productIndex].total_price = newTotal
  }

  /*findTotal(){
    this.totalPrice = 0;
    this.orderProductList.map(product=>{
      const newTotal = product.price * product.qty
      product.total_price = newTotal
      this.totalPrice = this.totalPrice + newTotal
    })
  }*/

  remove(id: number){

  }

  checkout(){
    // this.router.navigate(['orders']);
  }

}
