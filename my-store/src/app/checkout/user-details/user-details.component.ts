import { Component, OnInit } from '@angular/core';
import { CheckoutService} from '../../services/checkout.service'
import { User } from '../../models/types'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = {
    name: 'John Smith',
    mobile: 0,
    address: '',
    email: 'user@email.com'
  }

  constructor(
    private checkout: CheckoutService
  ) { }

  ngOnInit(): void {
    console.log(this.user)
  }

}
