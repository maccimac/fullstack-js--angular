import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductDataService} from '../../services/product-data.service'

import {ProductItem} from '../../../models/types'

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {


  id: string | null = null
  product: ProductItem | null = null

  constructor(
    private route: ActivatedRoute,
    private productData: ProductDataService
  ) {

  }

  findSingleProductDetail(){

  }

  async ngOnInit(): Promise<void> {
   this.id = this.route.snapshot.paramMap.get('id');

   if(this.id){
    this.product = this.productData.fetchSingleProduct(parseInt(this.id))
   }

 }

}
