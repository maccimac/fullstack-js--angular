import { Injectable } from '@angular/core';
import { OrderItem } from '../models/types'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderList: OrderItem[] = []
  totalPrice: number = 0

  constructor() { }

  fetchOrderList(){
    return this.orderList
  }

  addItem(orderPayload: OrderItem){
    const {id, qty} = orderPayload

    if (!this.orderList.length){
      this.orderList.push(orderPayload)
      return
    }

    const findOrderIndex = this.orderList.findIndex( (order: OrderItem) => {
      return order.id == id
    })

    if(findOrderIndex > -1){
      const oldQty = this.orderList[findOrderIndex].qty
      this.orderList[findOrderIndex].qty = oldQty + qty
    }else{
      this.orderList.push(orderPayload)
    }

  }

  decreaseItem(orderPayload: OrderItem){

  }


}
