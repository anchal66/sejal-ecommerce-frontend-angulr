import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categoryList: ProductCategory[];
  productList: Product[];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryService.getCategory()
    .subscribe(data=>{
      this.categoryList =data;
    })
    this.productService.getProductList()
    .subscribe(data=>{
      this.productList = data;
    })
  }

}
