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
  orderChange: EventEmitter<number> = new EventEmitter();
  orderProductChange: EventEmitter<ProductOrder[]> = new EventEmitter();
  totalOrder: number = 0

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
    console.log({findOrderIndex})

    if(findOrderIndex > -1){
      const oldQty = this.orderList[findOrderIndex].qty
      this.orderList[findOrderIndex].qty = oldQty + qty
      this.mapOrderProduct()
    }else{
      this.orderList.push(orderPayload)
      this.mapOrderProduct()
    }

    this.totalOrder = this.totalOrder + orderPayload.qty
    this.orderChange.emit(this.totalOrder);
  }

  decreaseItem(orderPayload: OrderItem){

  }

  mapOrderProduct(): void {
    this.orderProductList = []
    console.log('mapOrderProduct')
    this.orderList.map( order => {
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
    console.log({orderList: this.orderList})
    this.orderProductChange.emit(this.orderProductList)
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
    return this.orderChange;
  }

  getProductOrderChangeEmitter() {
    return this.orderProductChange;
  }


}
