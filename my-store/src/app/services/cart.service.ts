import { Injectable } from '@angular/core';
import { OrderItem } from '../models/types'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderList: OrderItem[] = []

  constructor() { }

  fetchOrderList(){
    return this.orderList
  }

  addItem(orderPayload: OrderItem){
    const {id, qty} = orderPayload
    const alreadyInOrder = this.orderList.filter( order => {
      order.id == id
    })

    if(!alreadyInOrder.length){
      this.orderList.push(orderPayload)
      console.log(this.orderList)
    }

  }
  decreaseItem(orderPayload: OrderItem){

  }


}
