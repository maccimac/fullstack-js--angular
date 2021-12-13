import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsAllComponent } from './products/products-all/products-all.component';
import { ProductSingleComponent } from './products/product-single/product-single.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserDetailsComponent } from './checkout/user-details/user-details.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';

const routes: Routes = [
  {path: '', component: ProductsAllComponent},
  {path: 'product/:id', component: ProductSingleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
