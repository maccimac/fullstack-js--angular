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
  allProducts: ProductItem[] = []
  orderProductList: ProductOrder[] =  []

  constructor(
    private productData: ProductDataService,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.orderProductList = []
    this.allProducts = this.allProducts
    this.cart.orderList.map( order => {
      const product = this.productData.fetchSingleProduct(Number(order.id))
      console.log(product)
      if(product){
        const productItem: ProductOrder = {
          ... product,
          ... order,
          total_price: product.price * order.qty
        }
        this.orderProductList.push(productItem)
      }
    })

  }


}
