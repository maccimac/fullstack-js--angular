import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {


  id: string | null = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
 }

}
