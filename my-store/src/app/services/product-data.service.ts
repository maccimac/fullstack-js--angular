import { Injectable } from '@angular/core';
import {ProductItem} from '../models/types'
import { HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProductDataService {
  allProducts: ProductItem[] = []
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(){
      this.fetchProducts().subscribe(data=>{
      console.log('product-data')
      this.allProducts = data
    })
  }

  fetchProducts():Observable<ProductItem[]>{
    return this.http.get<ProductItem[]>(`${window.origin}/assets/data.json`)
  }

  async fetchAllProductsArr(): Promise <ProductItem[]>{
    let  allProducts: ProductItem[] = []
    await this.fetchProducts().subscribe(data => {return data}
    )
    return allProducts
  }
}
