import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductDataService} from '../../services/product-data.service'

import {ProductItem} from '../../../models/types'

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  @Input() propId: number = 0
  id: number | null = null
  product: ProductItem | null = null

  constructor(
    private route: ActivatedRoute,
    private productData: ProductDataService
  ) {

  }

  findId(): number | null {
    const paramId = this.route.snapshot.paramMap.get('id');
    if(paramId){
      return parseInt(paramId)
    }else if(this.propId){
      return this.propId
    }
    return null
  }

  findSingleProductDetail(){

  }


  async ngOnInit(): Promise<void> {
    this.id = await this.findId()
   if(this.id){
    this.product = this.productData.fetchSingleProduct(this.id)
   }

 }

}
