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
      this.user.name.length,
      (this.user.mobile + '').length,
      this.user.address.length,
      this.user.email.length,
    ]
    if(userVals.includes(0)) return false
    return true
  }
  resetUser():void{
    this.user= {
      name: '',
      mobile: '',
      address: '',
      email: ''
    }
  }
}
