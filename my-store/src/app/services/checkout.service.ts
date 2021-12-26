import { Injectable } from '@angular/core';
import { User } from '../models/types'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  user: User = {
    name: '',
    mobile: 0,
    address: '',
    email: 'user@email.com'
  }


  constructor() { }
}
