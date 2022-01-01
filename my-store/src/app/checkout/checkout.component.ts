import { Router } from "@angular/router"
import { Component, OnInit } from '@angular/core';
import { CartService} from '../services/cart.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private cart: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!this.cart.orderProductList.length){
      this.router.navigate(['/'])
    }
  }

}
