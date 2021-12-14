import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  user: {
    name: '',
    mobile: 000,
    address: ''
  },
  order:{
    id: 0,
    status: 'pending'
    total: 0
  },

  constructor() { }
}
