import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsAllComponent } from './products/products-all/products-all.component';
import { ProductSingleComponent } from './products/product-single/product-single.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserDetailsComponent } from './checkout/user-details/user-details.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path: '', component: ProductsAllComponent},
  {path: 'product/:id', component: ProductSingleComponent},
  {path: 'cart', component: CartSummaryComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'success', component: SuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
