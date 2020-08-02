import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = "http://localhost:8888/api/product-category";

  constructor(private http: HttpClient) { }

  getCategory(): Observable<ProductCategory[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(res => res._embedded.productRepositoryng)
    )
  }
}

interface GetResponse {
  _embedded:{
    productRepository: ProductCategory[];
  }
}