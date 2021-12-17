export interface ProductItem {
  id: string | number
  name: string
  url: string
  description: string
  price: number
}

export interface OrderItem {
  id: string | number | null
  qty: number
}

export interface ProductOrder {
  id: string | number | null
  qty: number
  name: string
  url: string
  description: string
  price: number,
  total_price: number
}
