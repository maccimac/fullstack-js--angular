import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../../services/product-data.service'

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss']
})
export class ProductsAllComponent implements OnInit {

  allProducts: object[] = []

  constructor(
    private productData: ProductDataService
  ) { }

  ngOnInit(): void {
    this.allProducts = this.productData.fetchProducts()
  }

}
