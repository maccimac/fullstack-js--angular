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

    this.orderProductChange.emit(this.orderProductList)
    this.totalItemCountChange.emit(this.totalOrderCount)
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

  async removeOrder(id: number | null): Promise<void>{
    this.orderList = await this.orderList.filter( order => {
      return order.id !== id
    })

    if(this.orderList.length){
      this.mapOrderProduct()
    }else{
      this.orderProductChange.emit([])
      this.totalItemCountChange.emit(0)
    }
  }

  async mapOrderProduct(): Promise<void> {
    const _this = this
    this.orderProductList = []
    this.totalPrice = 0;
    this.totalOrderCount = 0

    for( let i = 0; i < this.orderList.length; i++){

      // let product: ProductItem | undefined = undefined
      const order = this.orderList[i]

      this.productData.fetchProducts().subscribe(data=>{
        const product = data.find( item => { return item.id == order.id } )

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

        if(i == this.orderList.length-1){
          console.log('for loop done', this.orderProductList)
          this.orderProductChange.emit(this.orderProductList)
          this.totalItemCountChange.emit(this.totalOrderCount)
        }
      })
    }

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

  resetOrder(){
    this.orderList = []
    this.orderProductList =  []
    this.totalPrice = 0
    this.totalOrderCount = 0

    this.orderProductChange.emit(this.orderProductList)
    this.totalItemCountChange.emit(this.totalOrderCount)
  }


}
