import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDataService } from '../../services/product-data.service'
import { CartService } from '../../services/cart.service'

import { ProductItem, OrderItem, ProductOrder } from '../../models/types'

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  @Input() propId: number = 0
  id: number | null = null
  product: ProductItem | null = null
  isSinglePage: boolean = false

  constructor(
    private route: ActivatedRoute,
    private productData: ProductDataService,
    private cart: CartService
  ) {

  }

  findId(): number | null {
    const paramId = this.route.snapshot.paramMap.get('id');
    if(paramId){
      return parseInt(paramId)
    }else if(this.propId){
      return this.propId
    }
    return null
  }

  findSingleProductDetail(){

  }

  order():void {
    const newOrder: OrderItem = {
      id: this.id,
      qty: 1
    }
    this.cart.addItem(newOrder)

  }


  async ngOnInit(): Promise<void> {
    if(this.route.routeConfig && this.route.routeConfig.path =='product/:id'){
      this.isSinglePage = true
    }
    this.id = await this.findId()
   if(this.id){
    this.product = this.productData.fetchSingleProduct(this.id)
   }

 }

}
