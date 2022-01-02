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
  showAlert: boolean = false
  productBought: string = ''

  constructor(
    private productData: ProductDataService
  ) { }

  async ngOnInit(): Promise<void> {
    // this.allProducts = []
    const _this = this
    this.productData.fetchProducts().subscribe(data=>{
      console.log(data)
      this.allProducts = data
    })
  }

  alert(name: string): void {
    this.showAlert = true;
    this.productBought = name
    setTimeout(() => {
      this.showAlert = false
      this.productBought = ''
    }, 3000);
  }


}
