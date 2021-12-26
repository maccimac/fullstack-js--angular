import { Injectable, EventEmitter} from '@angular/core';
import { OrderItem, ProductItem, ProductOrder } from '../models/types'
import { ProductDataService } from '../services/product-data.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderList: OrderItem[] = []
  orderProductList: ProductOrder[] =  []
  totalPrice: number = 0
  totalOrderCount: number = 0

  totalItemCountChange: EventEmitter<number> = new EventEmitter();
  orderProductChange: EventEmitter<ProductOrder[]> = new EventEmitter();

  constructor(
    private productData: ProductDataService,
  ) { }

  fetchOrderList(){
    return this.orderList
  }

  async addItem(orderPayload: OrderItem){
    const {id, qty} = orderPayload

    const findOrderIndex = this.orderList.findIndex( (order: OrderItem) => {
      return order.id == id
    })

    if(findOrderIndex > -1){ // if found in order
      const oldQty = this.orderList[findOrderIndex].qty
      this.orderList[findOrderIndex].qty = oldQty + qty
      this.mapOrderProduct()
    }else{ // if new product in orders
      this.orderList.push(orderPayload)
      this.mapOrderProduct()
    }
  }

  async updateItemQty(orderPayload: OrderItem){
    const {id, qty} = orderPayload
    const findOrderIndex = this.orderList.findIndex( (order: OrderItem) => {
      return order.id == id
    })
    if(findOrderIndex == -1) return
    this.orderList[findOrderIndex] = orderPayload
    this.mapOrderProduct()
  }

  removeOrder(id: number | null){
    const orderList = this.orderList.filter( order => {
      return order.id !== id
    })
    this.orderList = orderList
    this.mapOrderProduct()
  }

  mapOrderProduct(): void {
    this.orderProductList = []
    this.totalPrice = 0;
    this.totalOrderCount = 0

    this.orderList.map( order => {
      const product = this.productData.fetchSingleProduct(Number(order.id))

      if(!product) return

      const totalPrice = product.price * order.qty
      const productItem: ProductOrder = {
        ... product,
        ... order,
        total_price: totalPrice
      }
      this.totalPrice = this.totalPrice + totalPrice
      this.totalOrderCount = this.totalOrderCount + order.qty
      this.orderProductList.push(productItem)
    }) // end of map

    this.orderProductChange.emit(this.orderProductList)
    this.totalItemCountChange.emit(this.totalOrderCount)
  }

  findTotal(){
    this.totalPrice = 0;
    this.orderProductList.map(product=>{
      const newTotal = product.price * product.qty
      product.total_price = newTotal
      this.totalPrice = this.totalPrice + newTotal
    })
  }

  getOrderTotalChangeEmitter() {
    return this.totalItemCountChange;
  }

  getProductOrderChangeEmitter() {
    return this.orderProductChange;
  }


}
