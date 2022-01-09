import { Component, OnInit , Input, Output} from '@angular/core';
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
  showAlert: boolean = false
  productRemoved: string = ''
  @Input() editable: boolean  = true


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
        _this.orderProductList = orderProductList
        _this.totalPrice = _this.cart.totalPrice
      })
  }

  onChange(id: number | null, qty: number): void {
    const orderPayload = {
      id,
      qty
    }
    this.cart.updateItemQty(orderPayload)
    this.totalPrice = this.cart.totalPrice
  }

  removeOrder(id: number | null, name: string){
    this.cart.removeOrder(id)
    this.productRemoved = name
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = false
      this.productRemoved = ''
    }, 3000);

  }

  remove(id: number){

  }

  checkout(){

  }

}
