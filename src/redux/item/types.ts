export type Item = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    furnitures: string[];
    types: number[];
    rating: number;
  };
  
  export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
  }
  
  export type SearchItemParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
  };
  
  export interface ItemSliceState {
    items: Item[];
    status: Status;
  }