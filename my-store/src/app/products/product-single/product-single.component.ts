import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() propId: number  = 0
  @Output() newOrder = new EventEmitter<string>();

  id: number  = 0
  product: ProductItem | undefined = undefined
  isSinglePage: boolean = false
  showAlert: boolean = false

  qty: number = 1
  numEvt: Event | null = null

  constructor(
    private route: ActivatedRoute,
    private productData: ProductDataService,
    private cart: CartService
  ) {

  }

  findId(): number {
    const paramId = this.route.snapshot.paramMap.get('id');
    if(paramId){
      return parseInt(paramId)
    }else if(this.propId){
      return this.propId
    }
    return 0
  }

  order():void {
    const newOrder: OrderItem = {
      id: this.id,
      qty: this.qty
    }
    this.cart.addItem(newOrder)
    if (!this.product) return
    if(this.isSinglePage){
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 3000);
    }else{
      this.newOrder.emit(this.product.name);
    }

  }

  async ngOnInit(): Promise<void> {
    if(this.route.routeConfig && this.route.routeConfig.path =='product/:id'){
      this.isSinglePage = true
    }
    this.id = await this.findId()
   if(this.id){
     const id = this.id
    this.productData.fetchProducts().subscribe(data=>{
      this.product = data.find( product => { return product.id == id } )
    })
   }

 }


}
