import { Component, OnInit } from '@angular/core';
import {ProductDataService} from '../../services/product-data.service'
import { ProductItem } from '../../models/types'

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss']
})
export class ProductsAllComponent implements OnInit {

  allProducts: ProductItem[] = []

  constructor(
    private productData: ProductDataService
  ) { }

  ngOnInit(): void {
    this.allProducts = this.productData.fetchProducts()
  }

}
