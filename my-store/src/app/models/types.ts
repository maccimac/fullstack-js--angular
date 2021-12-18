export interface ProductItem {
  id: number
  name: string
  url: string
  description: string
  price: number
}

export interface OrderItem {
  id: number | null
  qty: number
}

export interface ProductOrder {
  id: number | null
  qty: number
  name: string
  url: string
  description: string
  price: number,
  total_price: number
}
