import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsAllComponent } from './products/products-all/products-all.component';
import { ProductSingleComponent } from './products/product-single/product-single.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserDetailsComponent } from './checkout/user-details/user-details.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsAllComponent,
    ProductSingleComponent,
    CartSummaryComponent,
    CartItemComponent,
    CheckoutComponent,
    UserDetailsComponent,
    ConfirmationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
