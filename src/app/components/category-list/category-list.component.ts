import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductCategory } from 'src/app/common/product-category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: ProductCategory[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(
      data => {
        this.categories = data
        console.log(data)
      },
      err=> console.log('error in catergory: ', err)
    )
  }

}
