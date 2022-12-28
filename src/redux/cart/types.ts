

export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    furniture: string;
    count: number;
  };
  
  export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
  }