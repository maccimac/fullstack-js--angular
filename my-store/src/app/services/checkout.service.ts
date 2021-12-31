import { Injectable } from '@angular/core';
import { User } from '../models/types'

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {

  user: User = {
    name: '',
    mobile: '',
    address: '',
    email: ''
  }

  constructor(
  ) { }

  isUserReady(): boolean{
    const userVals = [
      this.user.name,
      this.user.mobile,
      this.user.address,
      this.user.email,
    ]
    if( userVals.includes('') || userVals.includes(0)) return false
    return true
  }
}
