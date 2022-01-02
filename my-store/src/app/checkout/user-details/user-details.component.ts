import { Component, OnInit } from '@angular/core';
import { CheckoutService} from '../../services/checkout.service'
import { User } from '../../models/types'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = {
    name: '',
    mobile: 0,
    address: '',
    email: ''
  }

  constructor(
    private checkout: CheckoutService
  ) { }

  ngOnInit(): void {
    this.checkout.resetUser()
    console.log(this.user)
    this.user = this.checkout.user
  }

}
