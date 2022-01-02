import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"
import { CheckoutService} from '../services/checkout.service'
import { CartService } from '../services/cart.service'
import { User } from '../models/types'

function addDays(date: Date, days :number): Date {
  let result: Date = new Date(date);
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }

  result.setDate(result.getDate() + days);
  // result.toLocaleDateString("en-US", options)
  return result;
}

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  deliveryDueDate: Date | null = null
  user: User = {
    name: '',
    mobile: 0,
    address: '',
    email: ''
  }


  constructor(
    private checkout: CheckoutService,
    private router: Router,
    private cart: CartService
  ) { }

  async ngOnInit(): Promise<void> {
    if(!this.checkout.isUserReady()){
      this.router.navigate(['/'])
    }
    this.deliveryDueDate = await addDays(new Date(), 5)
    this.user = this.checkout.user

    this.cart.resetOrder()

  }


}
