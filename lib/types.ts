export interface ProductColor {
  name: string
  hex: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  compare_at_price?: number
  images: string[]
  category: string
  collection_id?: string
  collection_name?: string
  sizes: string[]
  colors: ProductColor[]
  stock: number
  is_featured: boolean
  material?: string
  origin?: string
  created_at: string
}

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  cover_image: string
  product_count?: number
  created_at: string
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize: string
  selectedColor: string
}

export interface ShippingAddress {
  first_name: string
  last_name: string
  email: string
  phone: string
  address_line_1: string
  address_line_2?: string
  city: string
  state: string
  postal_code: string
  country: string
}

export interface Order {
  id: string
  user_id: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  paypal_order_id?: string
  shipping_address: ShippingAddress
  items: OrderItem[]
  created_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  product: Product
  quantity: number
  price: number
  size: string
  color: string
}

export interface Profile {
  id: string
  first_name: string
  last_name: string
  avatar_url?: string
  phone?: string
}
