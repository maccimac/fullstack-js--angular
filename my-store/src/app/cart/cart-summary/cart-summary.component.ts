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

  constructor(
    private productData: ProductDataService,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.orderProductList = []
    this.totalPrice = 0
    this.organizeAllProduct()
  }

  organizeAllProduct(): void {
    this.cart.orderList.map( order => {
      const product = this.productData.fetchSingleProduct(Number(order.id))
      console.log(product)
      if(product){
        const totalPrice = product.price * order.qty
        const productItem: ProductOrder = {
          ... product,
          ... order,
          total_price: totalPrice
        }
        this.totalPrice = this.totalPrice + totalPrice
        this.orderProductList.push(productItem)
      }
    })
  }


}
